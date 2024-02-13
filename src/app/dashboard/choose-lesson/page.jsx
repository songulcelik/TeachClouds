import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import React from "react";
import {
	getAllPrograms,
	getAllProgramsByStudent,
} from "@/services/program-service";
import AllProgramProgramList from "@/components/dashboard/choose-lesson/all-program-list";
import StudentProgramList from "@/components/dashboard/choose-lesson/student-program-list";

const ChooseLessonPage = async () => {
	const dataAllPrograms = (await getAllPrograms()).json();
	const dataStudentPrograms = (await getAllProgramsByStudent()).json();

	const [allPrograms, studentPrograms] = await Promise.all([
		dataAllPrograms,
		dataStudentPrograms,
	]);

	const arr = allPrograms.filter(
		(itemAll) =>
			!studentPrograms.find(
				(itemStudent) =>
					itemStudent.lessonProgramId === itemAll.lessonProgramId
			)
	);

	return (
		<>
			<PageHeader title="Choose Lesson" />
			<Spacer height={50} />
			<AllProgramProgramList allPrograms={arr} />
			<Spacer />
			<StudentProgramList studentPrograms={studentPrograms} />
			<Spacer />
		</>
	);
};

export default ChooseLessonPage;
