import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import LessonList from "@/components/dashboard/lesson/lesson-list";
import { getAllLessonsByPage } from "@/services/lesson-service";
import React from "react";

const LessonPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllLessonsByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Lesson" />
			<Spacer height={50} />
			<LessonList data={data} />
			<Spacer />
		</>
	);
};

export default LessonPage;
