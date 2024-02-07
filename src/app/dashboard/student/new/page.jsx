import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import NewStudentForm from '@/components/dashboard/student/new-student-form'
import { getAllAdvisorTeachers } from '@/services/teacher-service'

import React from 'react'

const NewStudentPage = async() => {
  const res= await getAllAdvisorTeachers();
  const data= await res.json();
  if(!res.ok) throw new Error(data.message);

  return (
    <>
    <PageHeader title="New Assistant"/>
    <Spacer height={50}/>
    <NewStudentForm advisorTeachers={advisorTeachers}/>
    <Spacer/>
    </>
  )
}

export default NewStudentPage