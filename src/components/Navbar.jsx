import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TiHomeOutline } from "react-icons/ti";
import { PiAddressBookLight } from "react-icons/pi";
import { MdContactPhone } from "react-icons/md";
import { PiSuitcaseThin } from "react-icons/pi";
import { TbBrandBlogger } from "react-icons/tb";
import { MdOutlineContactPage } from "react-icons/md";



const Navbar = () => {
  return (
    <>
    <nav>
      <div className="container flex  justify-center">
        <div className=" w-full flex justify-between items-center pt-[40px] flex-wrap pl-[100px] ">
          <div className="">
            <Link to='/' ><img src="photos/logo.jpg" alt="logo" /></Link>
          </div>
          <ul className='flex gap-[30px]  pr-[180px] flex-wrap '>
            <li> <NavLink to='/' className={({ isActive }) => isActive ? "px-[24px] gap-[2px] flex items-center font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white transition-all bg-gradient-to-r from-[#FA5252] to-[#DD2476] py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold bg-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white bg-white  py-[10px] rounded-[10px] text-[16px] flex items-center gap-[2px] "  } ><TiHomeOutline /> Home </NavLink> </li>
            <li> <NavLink to='/About' className={({ isActive }) => isActive ? "px-[24px] flex items-center gap-[2px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all  py-[10px] rounded-[10px] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white text-[16px]" : " px-[24px] transition-all font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-white py-[10px] hover:text-white rounded-[10px] flex items-center gap-[2px]  "  } > <PiAddressBookLight/> About </NavLink> </li>
            <li> <NavLink to='/Resume' className={({ isActive }) => isActive ? "px-[24px] flex items-center gap-[2px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white  py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-white hover:text-white  py-[10px] rounded-[10px] flex items-center gap-[2px] "  } > <MdOutlineContactPage /> Resume </NavLink> </li>
            <li> <NavLink to='/Works' className={({ isActive }) => isActive ? "px-[24px] flex items-center gap-[2px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-white hover:text-white  py-[10px] rounded-[10px] flex items-center gap-[2px] "  } > <PiSuitcaseThin/> Works </NavLink> </li>
            <li> <NavLink to='/Blogs' className={({ isActive }) => isActive ? "px-[24px] flex items-center gap-[2px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] bg-white hover:text-white py-[10px] rounded-[10px] flex items-center gap-[2px] "  } > <TbBrandBlogger/> Blogs</NavLink> </li>
            <li> <NavLink to='/Contact' className={({ isActive }) => isActive ? "px-[24px] flex items-center gap-[2px] font-semibold bg-gradient-to-r from-[#FA5252] to-[#DD2476] transition-all  hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white py-[10px] rounded-[10px] text-[16px]" : " px-[24px] transition-all hover:text-white font-semibold hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  bg-white  py-[10px] rounded-[10px] flex items-center gap-[2px] "  } > <MdContactPhone /> Contact </NavLink> </li>
          </ul>
        </div>
      </div>
    </nav>
      
    </>
  )
}

export default Navbar
