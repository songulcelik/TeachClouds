import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import React from "react";
import { getAllStudentInfoByPageForTeacher } from "@/services/student-info-service";
import StudentInfoList from "@/components/dashboard/student-info/student-info-list";

const StudentInfoPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllStudentInfoByPageForTeacher(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Student Info" />
			<Spacer height={50} />
            <StudentInfoList data={data}/>
			<Spacer />
		</>
	);
};

export default StudentInfoPage;
