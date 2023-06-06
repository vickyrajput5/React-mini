import React, { useState } from 'react'
import Photo from '../img/photo.png'
import { auth, db, storage } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
const [err, setErr] = useState(false)
const navigate = useNavigate();
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
 try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const storageRef = ref(storage, displayName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      (error) => {
        setErr(true) 
      }, 
      () => {
      
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          })
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL:downloadURL,
          });
          setDoc(doc(db, "userChats", res.user.uid), {})
          navigate("/")
        });
      
      }
    );
      
    } catch (err) {
      setErr(true)
      console.log(err)
    }
  
 
  }
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">WS Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
            <input required type="text" placeholder="display name" />
            <input required type="email" placeholder="email" />
            <input required type="password" placeholder="password" />
                <input type="file"  id='file' className='file'/>
                <label htmlFor="file">
                    <img src={Photo} alt=""  className='photoadd'/>
                    <span>Add an image</span>
                </label>
                <button>Sign up</button>
                {err && <span>Something went wronge</span>}
            </form>
            <p>You do have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}

export default Register