"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import {
	createStudentInfo,
	deleteStudentInfo,
	updateStudentInfo,
} from "@/services/student-info-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
	absentee: Yup.number()
		.typeError("Invalid")
		.min(0, "Invalid")
		.required("Required"),
	educationTermId: Yup.number().typeError("Select one").required("Required"),
	lessonId: Yup.number().typeError("Select one").required("Required"),
	studentId: Yup.number().typeError("Select one").required("Required"),
	finalExam: Yup.number()
		.typeError("Invalid")
		.min(0, "Invalid")
		.max(100, "Invalid")
		.required("Required"),
	midtermExam: Yup.number()
		.typeError("Invalid")
		.min(0, "Invalid")
		.max(100, "Invalid")
		.required("Required"),
	infoNote: Yup.string().min(10, "Min 10 chars").required("Required"),
});

export const createStudentInfoAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await createStudentInfo(fields);
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

	revalidatePath("/dashboard/student-info");
	redirect(`/dashboard/student-info?msg=${encodeURI("Info was created")}`);
};

export const updateStudentInfoAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await updateStudentInfo(fields);
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

	revalidatePath("/dashboard/student-info");
	redirect(`/dashboard/student-info?msg=${encodeURI("Info was updated")}`);
};

export const deleteStudentInfoAction = async (id) => {
	if (!id) throw new Error("id is missing");

	const res = await deleteStudentInfo(id);
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	revalidatePath("/dashboard/student-info");
	redirect(`/dashboard/student-info?msg=${encodeURI("Info was deleted")}`);
};
