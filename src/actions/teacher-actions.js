"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { getGenderValues } from "@/helpers/misc";
import {
	assignProgramToTeacher,
	createTeacher,
	deleteTeacher,
	updateTeacher,
} from "@/services/teacher-service";
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

const TeacherFormSchema = Yup.object({
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
	lessonsIdList: Yup.string()
		.test("isJson", "Required", (val) => {
			const arr = JSON.parse(val);
			return Array.isArray(arr) && arr.length > 0;
		})
		.required("Required"),
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

export const createTeacherAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		TeacherFormSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			lessonsIdList: JSON.parse(fields.lessonsIdList),
		};

		const res = await createTeacher(payload);
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

	revalidatePath("/dashboard/teacher");
	redirect(`/dashboard/teacher?msg=${encodeURI("Teacher was created")}`);
};

export const updateTeacherAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		TeacherFormSchema.validateSync(fields, { abortEarly: false });

		const payload = {
			...fields,
			lessonsIdList: JSON.parse(fields.lessonsIdList),
		};


		const res = await updateTeacher(payload);
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

	revalidatePath("/dashboard/teacher");
	redirect(`/dashboard/teacher?msg=${encodeURI("Teacher was updated")}`);
};

export const deleteTeacherAction = async (id) => {
	if (!id) throw new Error("id is missing");

	const res = await deleteTeacher(id);
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	revalidatePath("/dashboard/teacher");
	redirect(`/dashboard/teacher?msg=${encodeURI("Teacher was deleted")}`);
};

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
	redirect(
		`/dashboard/program?msg=${encodeURI(
			"Program was assigned to the teacher"
		)}`
	);
};
