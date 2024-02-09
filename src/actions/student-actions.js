"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { getGenderValues } from "@/helpers/misc";
import { createStudent, deleteStudent, updateStudent } from "@/services/student-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
	name: Yup.string().required("Required"),
	surname: Yup.string().required("Required"),
	gender: Yup.string()
		.oneOf(getGenderValues(), "Invalid gender")
		.required("Required"),
	birthPlace: Yup.string().required("Required"),
	birthDay: Yup.string().required("Required"),
	phoneNumber: Yup.string()
		.matches(/\d{3}-\d{3}-\d{4}/, "Invalid phone number")
		.required("Required"),
	ssn: Yup.string()
		.matches(/\d{3}-\d{2}-\d{4}/, "Invalid ssn")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	username: Yup.string().required("Required"),
	advisorTeacherId: Yup.string().required("Required"),
	motherName: Yup.string().required("Required"),
	fatherName: Yup.string().required("Required"),
	password: Yup.string()
		.min(8, "Must be at least 8 chars")
		.matches(/[a-z]+/, "At least one lowercase")
		.matches(/[A-Z]+/, "At least one uppercase")
		.matches(/\d+/, "At least one number")
		.required("Required"),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password")],
		"Password fields don't match"
	),
});

export const createStudentAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

	
		const res = await createStudent(fields);
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

	revalidatePath("/dashboard/student");
	redirect(`/dashboard/student?msg=${encodeURI("Student was created")}`);
};

export const updateStudentAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await updateStudent(fields);
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

	revalidatePath("/dashboard/student");
	redirect(`/dashboard/student?msg=${encodeURI("Student was updated")}`);
};

export const deleteStudentAction = async (id) => {
	if (!id) throw new Error("id is missing");

	const res = await deleteStudent(id);
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	revalidatePath("/dashboard/student");
	redirect(`/dashboard/student?msg=${encodeURI("Student was deleted")}`);
};
