import React from 'react'
import User from '../img/man.png'
const Message = () => {
  return (
    <div
   
    className="message" 
  >
    <div className="messageInfo">
      <img
        src={
         User
        }
        alt=""
      />
      <span>just now</span>
    </div>
    <div className="messageContent">
      <p>waqar is  best </p>
      
    </div>
  </div>
  )
}

export default Message