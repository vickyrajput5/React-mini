import React from 'react'
import { FiPaperclip } from "react-icons/fi";
import { FcAddImage } from "react-icons/fc";
const Input = () => {
  return (
    <div className='input'>
      <input type="text"  placeholder='Type something'/>
      <div className="send">
       <FiPaperclip/>
        <input type="file" id='file' style={{display: "none"}} />
        <label htmlFor="file">
         <FcAddImage/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input