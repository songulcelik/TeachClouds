import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import React from "react";
import { getAllStudentsForAdvisor } from "@/services/student-service";
import { getAllLessons } from "@/services/lesson-service";
import { getAllTerms } from "@/services/term-service";
import EditStudentInfoForm from "@/components/dashboard/student-info/edit-student-info-form";
import { getStudentInfoById } from "@/services/student-info-service";

const EditStudentInfoPage = async ({ params }) => {
	const studentsData = (await getAllStudentsForAdvisor()).json();
	const lessonsData = (await getAllLessons()).json();
	const termsData = (await getAllTerms()).json();
	const infoData = (await getStudentInfoById(params.id)).json();

	const [students, lessons, terms, info] = await Promise.all([
		studentsData,
		lessonsData,
		termsData,
		infoData,
	]);

	// API dan gelen hata object e gore burada hata kontrolu yapilmalidir

	return (
		<>
			<PageHeader title="Edit Student Info" />
			<Spacer height={50} />
			<EditStudentInfoForm
				students={students}
				lessons={lessons}
				terms={terms}
				info={info}
			/>
			<Spacer />
		</>
	);
};

export default EditStudentInfoPage;
