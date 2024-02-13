import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import React from "react";
import { getAllStudentInfoByPageForStudent } from "@/services/student-info-service";
import { getAllMeetsForStudent } from "@/services/meet-service";
import GradeList from "@/components/dashboard/grades-meets/grade-list";
import MeetList from "@/components/dashboard/grades-meets/meet-list";

const GradesMeetsPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const dataGrades = (await getAllStudentInfoByPageForStudent(page)).json();
	const dataMeets = (await getAllMeetsForStudent()).json();

	const [grades, meets] = await Promise.all([dataGrades, dataMeets]);

	return (
		<>
			<PageHeader title="Grades &amp; Meets" />
			<Spacer height={50} />
			<GradeList grades={grades} />
			<Spacer />
			<MeetList meets={meets} />
			<Spacer />
		</>
	);
};

export default GradesMeetsPage;
