import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div>
            <form>
              <label>Enter username:</label>
              <input defaultValue={"PeterParker"}></input>
              <label>Enter password:</label>
              <input defaultValue={"SpiderMan"}></input>
              <button>Submit</button>
            </form>
            <form>
              <label>Enter username:</label>
              <input defaultValue={"Admin"}></input>
              <label>Enter password:</label>
              <input defaultValue={"AdminPassword"}></input>
              <button>Submit</button>
            </form>
    </div>
    
  )
}
