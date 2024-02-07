import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import { getStudentById } from "@/services/student-service";
import { getAllAdvisorTeachers } from "@/services/teacher-service";
import React from "react";
const EditStudentPage = async ({ params }) => {
    const dataStudent = (await getStudentById(params.id)).json();
    const dataAdvisors = (await getAllAdvisorTeachers()).json();
    const [student, advisors] = await Promise.all([dataStudent, dataAdvisors]);
    return (
        <>
            <PageHeader title="Edit Assistant" />
            <Spacer height={50} />
            <EditAssistantForm student={student.object} advisors={advisors} />
            <Spacer />
        </>
    );
};
export default EditStudentPage;
