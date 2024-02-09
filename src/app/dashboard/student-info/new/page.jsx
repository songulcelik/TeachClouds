import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import React from "react";
import { getAllStudentsForAdvisor } from "@/services/student-service";
import { getAllLessons } from "@/services/lesson-service";
import { getAllTerms } from "@/services/term-service";
import NewStudentInfoForm from "@/components/dashboard/student-info/new-student-info-form";
import StudentsPage from "../../student/page";

const NewStudentInfoPage = async () => {
	const studentsData = (await getAllStudentsForAdvisor()).json();
	const lessonsData = (await getAllLessons()).json();
	const termsData = (await getAllTerms()).json();

	const [students, lessons, terms] = await Promise.all([
		studentsData,
		lessonsData,
		termsData,
	]);

	// API dan gelen hata object e gore burada hata kontrolu yapilmalidir

	return (
		<>
			<PageHeader title="New Student Info" />
			<Spacer height={50} />
			<NewStudentInfoForm
				students={students}
				lessons={lessons}
				terms={terms}
			/>
			<Spacer />
		</>
	);
};

export default NewStudentInfoPage;
