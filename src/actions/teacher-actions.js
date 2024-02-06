"use server";
import {
    convertFormDataToJson,
    getYupErrors,
    response,
} from "@/helpers/form-validation";
import { assignProgramToTeacher } from "@/services/teacher-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";
const ProgramFormSchema = Yup.object({
    lessonProgramId: Yup.string()
        .test("isJson", "Required", (val) => {
            const arr = JSON.parse(val);
            return Array.isArray(arr) && arr.length > 0;
        })
        .required("Required"),
    teacherId: Yup.string().required("Required"),
});
export const assignProgramAction = async (prevState, formData) => {
    try {
        const fields = convertFormDataToJson(formData);
        ProgramFormSchema.validateSync(fields, { abortEarly: false });
        const payload = {
            ...fields,
            lessonProgramId: JSON.parse(fields.lessonProgramId),
        };
        const res = await assignProgramToTeacher(payload);
        const data = await res.json();
        if (!res.ok) {
            return response(false, data?.message, data?.validations);
        }
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
            return getYupErrors(err.inner);
        }
        throw err;
    }
    revalidatePath("/dashboard/program");
    redirect(`/dashboard/program?msg=${encodeURI("Program was assigned to the teacher")}`);
};
