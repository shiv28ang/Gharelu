/* eslint-disable no-unused-vars */
import React from 'react'
import { MdAddHome, MdHomeWork, MdPermContactCalendar } from 'react-icons/md'
import { RiFileListLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles}) => {
  return (
      <nav className={`${containerStyles}`}>
          <NavLink to={"/"} 
          className={({isActive})=> isActive ?
          "active-link flexCenter gap-x-1 rounded full px-2 py-2":
          "flexCenter gap-x-1 rounded-full px-2 py-1 "}>
            <MdHomeWork/>
            <div>Home</div>
          </NavLink>

          <NavLink to={"/listing"} 
          className={({isActive})=> isActive ?
            "active-link flexCenter gap-x-1 rounded full px-2 py-2"
            : "flexCenter gap-x-1 rounded-full px-2 py-1 "}>
            <RiFileListLine/>
            <div>Listing</div>
          </NavLink>

          <NavLink to={"mailto:21ucs192@lnmiit.ac.in"} 
          className={ "flexCenter gap-x-1 rounded-full px-2 py-1 cursor-pointer"}>
            <MdPermContactCalendar/>
            <div>Contact</div>
          </NavLink>

          <NavLink to={"/addproperty"} 
          className={"flexCenter gap-x-1 rounded-full px-2 py-1 cursor-pointer"}>
            <MdAddHome/>
            <div>Add Property</div>
          </NavLink>
      </nav>
  )
}

export default Navbar
