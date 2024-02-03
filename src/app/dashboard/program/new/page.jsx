import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import NewProgramForm from '@/components/dashboard/program/new-program-form'


import React from 'react'

const NewProgramPage = () => {
  return (
    <>
    <PageHeader title="New Term"/>
    <Spacer height={50}/>
    <NewProgramForm/>
    <Spacer/>
    </>
  )
}

export default NewProgramPage