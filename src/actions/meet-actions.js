"use server";
import {
    convertFormDataToJson,
    getYupErrors,
    response,
} from "@/helpers/form-validation";
import { createMeet, deleteMeet, updateMeet } from "@/services/meet-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";
const FormSchema = Yup.object({
    date: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    startTime: Yup.string().required("Required"),
    stopTime: Yup.string().required("Required"),
    studentIds: Yup.string().test("isJson", "Required", (val) => {
        const arr = JSON.parse(val);
        return Array.isArray(arr) && arr.length > 0;
    }),
});
export const createMeetAction = async (prevState, formData) => {
    try {
        const fields = convertFormDataToJson(formData);
        FormSchema.validateSync(fields, { abortEarly: false });
        const res = await createMeet(fields);
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
    revalidatePath("/dashboard/meet");
    redirect(`/dashboard/meet?msg=${encodeURI("Meet was created")}`);
};
export const updateMeetAction = async (prevState, formData) => {
    try {
        const fields = convertFormDataToJson(formData);
        FormSchema.validateSync(fields, { abortEarly: false });
        const res = await updateMeet(fields);
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
    revalidatePath("/dashboard/meet");
    redirect(`/dashboard/meet?msg=${encodeURI("Meet was updated")}`);
};
export const deleteMeetAction = async (id) => {
    if (!id) throw new Error("id is missing");
    const res = await deleteMeet(id);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message);
    }
    revalidatePath("/dashboard/meet");
    redirect(`/dashboard/meet?msg=${encodeURI("Meet was deleted")}`);
};
