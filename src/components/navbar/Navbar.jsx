import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
          <li><Link to='/' className={({ isActive }) => isActive ? 'active' : ''}>About</Link></li>
    <li><Link to='/resume' className={({ isActive }) => isActive ? 'active' : ''}>Resume</Link></li>
    <li><Link to='/portfolio' className={({ isActive }) => isActive ? 'active' : ''}>Portfolio</Link></li>
    <li><Link to='/contact' className={({ isActive }) => isActive ? 'active' : ''}>Contact</Link></li>
        </ul>
    </div>
  )
}
