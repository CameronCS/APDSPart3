import React, { useEffect } from 'react'

export default function ClientHome({ user, setUser }) {
  // eslint-disable-next-line
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
    console.log(user);
  }, [setUser]);

  console.log(user);
  return (
    <div>
      <h1>User Home</h1>
    </div>
  )
}
