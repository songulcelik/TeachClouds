import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/misc/spacer'
import NewTermForm from '@/components/dashboard/term/new-term-form'
import React from 'react'

const NewTermPage = () => {
  return (
    <>
    <PageHeader title="New Term"/>
    <Spacer height={50}/>
    <NewTermForm/>
    <Spacer/>
    </>
  )
}

export default NewTermPage