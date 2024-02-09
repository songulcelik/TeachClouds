import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import TeacherList from "@/components/dashboard/teacher/teacher-list";
import { getAllTeachersByPage } from "@/services/teacher-service";
import React from "react";

const TeacherPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllTeachersByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Teacher" />
			<Spacer height={50} />
            <TeacherList data={data}/>
			<Spacer />
		</>
	);
};

export default TeacherPage;
