import React, { useEffect, useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'

export default function Login({ setUser }) {
  const [h_username, setUsername] = useState("AdminUser1")
  const [h_password, setPassword] = useState("AdminUser1!")

  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Swift Portal - Login';
  }, []);

  const log_user_in = async () => {
    try {
      const result = await fetch("https://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": h_username,
          "password": h_password
        })
      })

      const { _id, isadmin, username, message, token } = await result.json();

      if (result.ok) {
        if (isadmin === 'true') {
          console.log('user is admin');
          await log_admin_in()
        } else {
          const user = {
            _id: _id,
            username: username,
            token: token,
            isadmin: isadmin
          }
          console.log(user);
          setUser(user)
          localStorage.setItem('user', JSON.stringify(user))
          navigate('/user')
        }
      } else {
        alert(message)
      }
    }
    catch (err) {
      console.log('err: ', err);
    }
  }

  const log_admin_in = async () => {
    try {
      const result = await fetch("https://localhost:3001/api/employee/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": h_username,
          "password": h_password
        })
      })

      const { _id, username, token, message } = await result.json()
      
      if (result.ok) {
        console.log('username ', username, ' token ', token);
        const user = {
          _id: _id,
          username,
          token,
          isadmin: true
        }
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
        navigate('/employee')
      } else {
        alert(message)
      }

    } catch (err) {
      console.log('err: ', err);
    }
  }

  return (
<div className="login-div">
  <div className="navspace">
    {/* This space is for the fixed header */}
  </div>
  <div className="login-header">
      <h1 className="site-title">Login</h1>
  </div>
  <div className="login-form">
    <div className="login-form-user">
      <img src="/images/loginuser.png" alt="Swift Logo" className="loginphoto" />
      <label>Enter username:</label>
      <input defaultValue={"SwiftUser1"} onChange={(e) => { setUsername(e.target.value) }}></input>
      <label>Enter password:</label>
      <input type='password' defaultValue={"SwiftUser1!"} onChange={(e) => { setPassword(e.target.value) }}></input>
      <button className='loginbutton' onClick={log_user_in}>Log in :)</button>
    </div>
  </div>
</div>
  )
}
