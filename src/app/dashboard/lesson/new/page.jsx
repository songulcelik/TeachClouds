import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/misc/spacer'
import NewLessonForm from '@/components/dashboard/lesson/new-lesson-form'
import React from 'react'

const NewLessonPage = () => {
  return (
    <>
    <PageHeader title="New Lesson"/>
    <Spacer height={50}/>
    <NewLessonForm/>
    <Spacer/>
    </>
  )
}

export default NewLessonPage