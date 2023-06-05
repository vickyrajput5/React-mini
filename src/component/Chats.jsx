import React from 'react'
import User from '../img/man.png'
const Chats = () => {
  return (
    <div className="chats">
   
      <div
        className="userChat"
      >
        <img src={User} alt="" />
        <div className="userChatInfo">
          <span>Waqar</span>
          <p>Im Waqar rajput</p>
        </div>
      </div>
   
  </div>
  )
}

export default Chats