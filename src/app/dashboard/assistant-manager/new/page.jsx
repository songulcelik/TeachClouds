import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/misc/spacer'
import NewAssistantForm from '@/components/dashboard/assistant/new-assistant-form'
import React from 'react'

const NewAssistantPage = () => {
  return (
    <>
    <PageHeader title="New Assistant"/>
    <Spacer height={50}/>
    <NewAssistantForm/>
    <Spacer/>
    </>
  )
}

export default NewAssistantPage