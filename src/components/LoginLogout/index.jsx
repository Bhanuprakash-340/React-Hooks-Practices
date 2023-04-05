import React, { useState } from 'react'
import './index.css'


const LoginLogout = () => {
    const [isLogin, setLogin] = useState(false)

    const isLoginText = isLogin ? "Welcome User" : "Please Login"
    const loggedButton = isLogin ? "Logout" : "Login"

  return (
    <div className='login-logout-app-container'>
        <h1 className='login-message'>{isLoginText}</h1>
        <button type='button' className='login-logout-button' onClick={() =>setLogin(prevState => !prevState)}>{loggedButton}</button>
    </div>
  )
}

export default LoginLogout