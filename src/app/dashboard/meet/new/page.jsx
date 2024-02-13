import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import React from "react";
import { getAllStudentsForAdvisor } from "@/services/student-service";
import NewMeetForm from "@/components/dashboard/meet/new-meet-form";

const NewMeetPage = async () => {
	const res = await getAllStudentsForAdvisor();
	const data = await res.json();

	if (!res.ok) throw new Error(data.message);

	const students = data.map((item) => ({
		id: item.userId,
		fullName: `${item.name} ${item.surname}`,
	}));

	return (
		<>
			<PageHeader title="New Meet" />
			<Spacer height={50} />
			<NewMeetForm students={students} />
			<Spacer />
		</>
	);
};

export default NewMeetPage;
