import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import EditStudentForm from "@/components/dashboard/student/edit-student-form";
import { getStudentById } from "@/services/student-service";
import { getAllAdvisorTeachers } from "@/services/teacher-service";
import React from "react";

const EditStudentPage = async ({ params }) => {
	const dataStudent = (await getStudentById(params.id)).json();
	const dataAdvisors = (await getAllAdvisorTeachers()).json();

	const [student, advisorTeachers] = await Promise.all([dataStudent, dataAdvisors]);

	return (
		<>
			<PageHeader title="Edit Student" />
			<Spacer height={50} />
			<EditStudentForm student={student} advisorTeachers={advisorTeachers} />
			<Spacer />
		</>
	);
};

export default EditStudentPage;
