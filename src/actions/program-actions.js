"use server";

import {
	convertFormDataToJson,
	getYupErrors,
	response,
} from "@/helpers/form-validation";
import { getEducationTermValues } from "@/helpers/misc";
import { createTerm, deleteTerm } from "@/services/term-service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";

const FormSchema = Yup.object({
	term: Yup.string()
		.oneOf(getEducationTermValues(), "Invalid term")
		.required("Required"),
	startDate: Yup.date().required("Required"),
	endDate: Yup.date()
		.min(Yup.ref("startDate"), "Must be later than start date")
		.required("Required"),
	lastRegistrationDate: Yup.date()
		.max(Yup.ref("startDate"), "Must be earlier than start date")
		.required("Required"),
});

export const createTermAction = async (prevState, formData) => {
	try {
		const fields = convertFormDataToJson(formData);

		FormSchema.validateSync(fields, { abortEarly: false });

		const res = await createTerm(fields);
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

	revalidatePath("/dashboard/education-term");
	redirect(`/dashboard/education-term?msg=${encodeURI("Term was created")}`);
};


export const deleteTermAction = async (id) => {
	if (!id) throw new Error("id is missing");

	const res = await deleteTerm(id);
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	revalidatePath("/dashboard/education-term");
	redirect(`/dashboard/education-term?msg=${encodeURI("Term was deleted")}`);
};
