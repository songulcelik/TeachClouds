import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import React from "react";
import { getMeetById } from "@/services/meet-service";
import { getAllStudentsForAdvisor } from "@/services/student-service";
import EditMeetForm from "@/components/dashboard/meet/edit-meet-form";

const EditMeetPage = async ({ params }) => {
	const dataMeet = (await getMeetById(params.id)).json();
	const dataStudents = (await getAllStudentsForAdvisor()).json();

	const [meet, students] = await Promise.all([dataMeet, dataStudents]);

	const arrStudents = students.map((item) => ({
		id: item.userId,
		fullName: `${item.name} ${item.surname}`,
	}));


	return (
		<>
			<PageHeader title="Edit Meet" />
			<Spacer height={50} />
			<EditMeetForm students={arrStudents} meet={meet.object} />
			<Spacer />
		</>
	);
};

export default EditMeetPage;
