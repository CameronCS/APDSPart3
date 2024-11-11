import React, { useEffect, useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'

export default function Login({ setUser }) {
  const [h_username, setUsername] = useState("")
  const [h_password, setPassword] = useState("")

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

      const { isadmin, username, message, token } = await result.json();

      if (result.ok) {
        if (isadmin === 'true') {
          console.log('user is admin');
          await log_admin_in()
        } else {
          const user = {
            username: username,
            token: token,
            isadmin: isadmin
          }
          console.log(user);
          setUser(user)
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

      const { username, token, message } = await result.json()
      
      if (result.ok) {
        console.log('username ', username, ' token ', token);
        const user = {
          username,
          token,
          isadmin: true
        }
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
  <div className="login-forms">
    <div className="login-form-user">
      <img src="/images/loginuser.png" alt="Swift Logo" className="loginphoto" />
      <label>Enter username:</label>
      <input defaultValue={"SwiftUser1"} onChange={(e) => { setUsername(e.target.value) }}></input>
      <label>Enter password:</label>
      <input defaultValue={"SwiftUser1!"} onChange={(e) => { setPassword(e.target.value) }}></input>
      <button onClick={log_user_in}>Log in as User</button>
    </div>
    <div className="login-form-emp">
    <img src="/images/loginadmin.png" alt="Swift Logo" className="loginphoto" />
      <label>Enter username:</label>
      <input defaultValue={"AdminUser1"} onChange={(e) => { setUsername(e.target.value) }}></input>
      <label>Enter password:</label>
      <input defaultValue={"AdminUser1!"} onChange={(e) => { setPassword(e.target.value) }}></input>
      <button onClick={log_admin_in}>Log in as Admin</button>
    </div>
  </div>
</div>
  )
}
