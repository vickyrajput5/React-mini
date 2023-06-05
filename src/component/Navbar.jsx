import User from '../img/man.png'
const Navbar = () => {
  return (
    <div>
    
      <div className='navbar'>
      <span className="logo"> WS chat</span>
      <div className="user">
      <img src={User} alt="" />
      <div className="user-name">Waqar Rajput</div>
      <button>Logout</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar