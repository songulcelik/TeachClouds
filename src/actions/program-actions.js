"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { getDayValues, getEducationTermValues } from "@/helpers/misc";
import { createProgram, deleteProgram } from "@/services/program-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
	lessonIdList: Yup.string().required("Required"),
	day: Yup.string().oneOf(getDayValues(), "Invalid day").required("Required"),
	educationTermId: Yup.string().required("Required"),
	startTime: Yup.string().required("Required"),
	stopTime: Yup.string().required("Required"),
});

export const createProgramAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await createProgram(fields);
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
	redirect(`/dashboard/program?msg=${encodeURI("Program was created")}`);
};

export const deleteProgramAction = async (id) => {
	if (!id) throw new Error("id is missing");

	const res = await deleteProgram(id);
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	revalidatePath("/dashboard/program");
	redirect(`/dashboard/program?msg=${encodeURI("Program was deleted")}`);
};
