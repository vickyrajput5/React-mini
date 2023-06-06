import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'
import User from '../img/man.png'
const Navbar = () => {

  const {currentUser} = useContext(AuthContext);
  return (
    <div>
    
      <div className='navbar'>
      <span className="logo"> WS chat</span>
      <div className="user">
      <img src={currentUser.photoURL} alt="" />
      <div className="user-name">{currentUser.displayName}</div>
      <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar