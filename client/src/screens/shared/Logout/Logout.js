import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function Logout({ setUser }) {
    // eslint-disable-next-line
    useEffect(() => {
        localStorage.removeItem('user')
        setUser(null)
    }, [setUser])

  return (
    <Navigate to={'/'} />
  )
}
