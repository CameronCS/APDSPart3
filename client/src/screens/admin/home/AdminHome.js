import React from 'react'
import './AdminHome.css'

export default function AdminHome({user}) {
  console.log(user);
  return (
    <div className="UserHome">
      <div className="navspace">
        {/* This space is for the fixed header */}
      </div>
      <div className='UserMessage'>
        <h1>User Home</h1>
        <h2>Hello, {user ? user.username : 'Guest'}!</h2>
      </div>
    </div>
  )
}
