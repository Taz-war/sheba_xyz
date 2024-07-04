import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <div className=' bg-white h-20 md:h-16 sticky top-0 shadow-md z-10'>
        <div className=' container mx-auto flex content-between items-center p-2'>
          <Link to='/'><img src={logo} alt='logo' /></Link>
          <div className=' ms-auto'>
            <NavLink to='/services'className={({isActive})=>isActive ? 'px-3 py-1 mx-2 rounded-md font-normal border border-blue-400 text-white bg-blue-600' : 'px-3 py-1 mx-2 text-[#333] font-normal hover:bg-blue-600 hover:text-white rounded-md'}>Services</NavLink>
            <NavLink to='/staffs'className={({isActive})=>isActive ? 'px-3 py-1 mx-2 rounded-md font-normal border border-blue-400 text-white bg-blue-600' : 'px-3 py-1 mx-2 text-[#333] font-normal hover:bg-blue-600 hover:text-white rounded-md'}>Staffs</NavLink>
            <NavLink to='/login'className={({isActive})=>isActive ? 'px-3 py-1 mx-2 rounded-md font-normal border border-blue-400 text-white bg-blue-600' : 'px-3 py-1 mx-2 text-[#333] font-normal hover:bg-blue-600 hover:text-white rounded-md'}>Login</NavLink>
            {/* <NavLink to='/dashboard'className={({isActive})=>isActive ? 'px-3 py-1 mx-2 rounded-md font-normal border border-blue-400 text-white bg-blue-600' : 'px-3 py-1 mx-2 text-[#333] font-normal hover:bg-blue-600 hover:text-white rounded-md'}>Dashboard</NavLink>
            <NavLink to='/admin'className={({isActive})=>isActive ? 'px-3 py-1 mx-2 rounded-md font-normal border border-blue-400 text-white bg-blue-600' : 'px-3 py-1 mx-2 text-[#333] font-normal hover:bg-blue-600 hover:text-white rounded-md'}>Admin</NavLink>
            <NavLink to='/staff'className={({isActive})=>isActive ? 'px-3 py-1 mx-2 rounded-md font-normal border border-blue-400 text-white bg-blue-600' : 'px-3 py-1 mx-2 text-[#333] font-normal hover:bg-blue-600 hover:text-white rounded-md'}>Staff</NavLink> */}

          </div>
        </div>
    </div>
  )
}

export default Navbar