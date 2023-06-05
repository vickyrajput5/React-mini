import React from 'react'
import Photo from '../img/photo.png'
const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">WS Chat</span>
            <span className='title'>Register</span>
            <form >
                <input type="text" placeholder='Display Name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='Password' />
                <input type="file"  id='file' className='file'/>
                <label htmlFor="file">
                    <img src={Photo} alt=""  className='photoadd'/>
                    <span>Add an image</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register