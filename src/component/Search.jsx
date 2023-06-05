import React from 'react'
import User from '../img/man.png'
const Search = () => {
  return (
    <div>  <div className="search">
    <div className="searchForm">
      <input
        type="text"
        placeholder="Find a user"
        
      />
    </div>
   
      <div className="userChat" >
        <img src={User} alt="" />
        <div className="userChatInfo">
          <span>waqar</span>
        </div>
      </div>
   
  </div></div>
  )
}

export default Search