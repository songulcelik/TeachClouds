import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import EditAssistantForm from "@/components/dashboard/assistant/edit-assistant-form";
import { getAssistantById } from "@/services/assistant-service";
import React from "react";

const EditAssistantPage = async ({ params }) => {
	const res = await getAssistantById(params.id);
	const data = await res.json();
	if (!res.ok) {
		throw new Error(data.message);
	}

	return (
		<>
			<PageHeader title="Edit Assistant" />
			<Spacer height={50} />
			<EditAssistantForm data={data.object} />
			<Spacer />
		</>
	);
};

export default EditAssistantPage;
