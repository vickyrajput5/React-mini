import React from 'react'
import Photo from '../img/photo.png'
const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">WS Chat</span>
            <span className='title'>Login</span>
            <form >
            
                <input type="email" placeholder='email' />
                <input type="password" placeholder='Password' />
                
                <button>Login</button>
            </form>
            <p>You dont have an account? Register</p>
        </div>
    </div>
  )
}

export default Login