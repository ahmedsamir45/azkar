import { Link, useLocation } from 'react-router-dom'
import "./Navbar.scss"
import { AiFillHome } from 'react-icons/ai'
import { FaInfoCircle } from 'react-icons/fa'
  
  function Navbar() {
    const location = useLocation()
    return (
      <nav className='navbar'>
      <div className="logo">
      اذكار
      </div>
      <ul className='links'>
      <li>
      <Link to="/" className={location.pathname=="/"?"active":""}><AiFillHome className="icon" /> الرئيسية</Link>
      </li>
      <li>
      <Link to="/about" className={location.pathname=="/about"?"active":""} >
      <FaInfoCircle />
      نبذة عنا</Link>
      </li>
      </ul>
      
      </nav>
    )
  }
  
  export default Navbar
  


{/*
  import { NavLink } from 'react-router-dom'
  import { AiFillHome } from 'react-icons/ai'
  
  function Navbar() {
    return (
      <nav className="navbar">
      <ul>
      <li>
      <NavLink
            to="/"
            className={({ isActive }) => isActive ? "active" : ""}
            >
            <AiFillHome className="icon" /> الرئيسية
            </NavLink>
            </li>
            <li>
            <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "active" : ""}
            >
            نبذة عنا
            </NavLink>
            </li>
            </ul>
            </nav>
          )
        }
        
        export default Navbar
        
        */}