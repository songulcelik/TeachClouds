"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { createLesson, deleteLesson } from "@/services/lesson-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
	lessonName: Yup.string().required("Required"),
	creditScore: Yup.number()
		.typeError("Invalid number")
		.min(1, "Min 1")
		.max(100, "Max 100")
		.required("Required"),
});

export const createLessonAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await createLesson(fields);
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

	revalidatePath("/dashboard/lesson");
	redirect(`/dashboard/lesson?msg=${encodeURI("Lesson was created")}`);
};

export const deleteLessonAction = async (id) => {
	if (!id) throw new Error("id is missing");

	const res = await deleteLesson(id);
	const data = await res.json();
	console.log(res)
	if (!res.ok) {
		throw new Error(data.message);
	}

	revalidatePath("/dashboard/lesson");
	redirect(`/dashboard/lesson?msg=${encodeURI("Lesson was deleted")}`);
};
