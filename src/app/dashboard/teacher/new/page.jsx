import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import NewTeacherForm from "@/components/dashboard/teacher/new-teacher-form";
import { getAllPrograms } from "@/services/program-service";
import React from "react";

const NewTeacherPage = async () => {
	const res = await getAllPrograms();
	const data = await res.json();

	const programs = data.map((item) => ({
		id: item.lessonProgramId,
		label: item.lessonName.map((item) => item.lessonName).join("-"),
	}));

	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="New Assistant" />
			<Spacer height={50} />
			<NewTeacherForm programs={programs} />
			<Spacer />
		</>
	);
};

export default NewTeacherPage;
