import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import EditTeacherForm from "@/components/dashboard/teacher/edit-teacher-form";
import { getAllPrograms } from "@/services/program-service";
import { getTeacherById } from "@/services/teacher-service";
import React from "react";

const EditTeacherPage = async ({ params }) => {
	const dataTeacher = (await getTeacherById(params.id)).json();
	const dataPrograms = (await getAllPrograms()).json();

	const [teacher, programs] = await Promise.all([dataTeacher, dataPrograms]);

	const allPrograms = programs.map((item) => ({
		id: item.lessonProgramId,
		label: item.lessonName.map((item) => item.lessonName).join("-"),
	}));


	return (
		<>
			<PageHeader title="Edit Teacher" />
			<Spacer height={50} />
			<EditTeacherForm
				programs={allPrograms}
				teacher={teacher.object}
			/>
			<Spacer />
		</>
	);
};

export default EditTeacherPage;
