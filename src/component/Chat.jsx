import React from 'react'
import { FaVideo } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import Input from './Input';
import Messages from './Messages';
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Waqar</span>
        <div className="chatIcons">
        <FaVideo/>
        <FiUserPlus/>
        <HiDotsVertical/>
      </div>
      </div>
     <Messages/>
     <Input/>
      </div>
  )
}

export default Chat