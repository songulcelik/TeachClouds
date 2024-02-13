import Link from 'next/link'
import React from 'react'
import { TfiLock } from 'react-icons/tfi'

const UserMenuGuest = () => {
  return (
    <Link href="/login" className="btn btn-secondary"><TfiLock/> Login</Link>
  )
}

export default UserMenuGuest