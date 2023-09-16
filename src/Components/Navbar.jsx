import React from 'react'
import { useContext } from 'react'
import {signOut} from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
        <span className="navbarlogo">Chat India</span>
        <div className="user">
          <img className='navbaravatar' src= {currentUser.photoURL} alt="img" />
          <span>{currentUser.displayName}</span>
          <button className='navbarbutton' onClick={()=>signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
