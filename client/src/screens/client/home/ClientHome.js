import React, { useEffect } from 'react'
import './ClientHome.css'

export default function ClientHome({ user, setUser }) {
  // eslint-disable-next-line
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [setUser]);

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
