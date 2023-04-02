import React, { useState } from 'react'
import Logo from '../../assets/logo-bookmark.svg'
import LogoMenu from '../../assets/logo-menu.svg'
import {GoThreeBars} from 'react-icons/go'
import  {MdClose} from 'react-icons/md'
import {GrFacebook} from 'react-icons/gr'
import {FaTwitterSquare} from 'react-icons/fa'
const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false)
  const menuToggleOn=()=>{
    setMenuOpen(true)
  }
  const menuToggleOff=()=>{
    setMenuOpen(false)
  }
  return (
    <nav id='nav' className='mx-auto  container  my-8 '>
      <div className="flex items-center justify-between flex-row  px-8  text-sm">
          <img src={Logo} alt='Logo' className='cursor-pointer' />
          <div className=" hidden  md:flex md:flex-row md:items-center md:justify-between md:space-x-8 md:uppercase md:text-veryDarkBlue md:font-normal ">
             <a href="#" className='px-6 py-2   hover:text-softRed'>Features</a> 
             <a href="#" className=' px-6 py-2 hover:text-softRed'>Pricing</a> 
             <a href="#" className=' px-6 py-2 hover:text-softRed'>Contact</a> 
            <a href="#" className='px-8 py-2 rounded-lg text-white font-medium border-2 bg-softRed hover:bg-white hover:text-softRed hover:border-softRed '>Login</a> 
          </div>
         <div className=' md:hidden'>
                <GoThreeBars size={27} className="cursor-pointer" onClick={menuToggleOn}/>
                {
                  menuOpen &&  <div className="absolute w-full h-screen bg-veryDarkBlue top-0 left-0 p-8 scale-in-hor-left opacity-70">
                    <div className="flex flex-row items-center justify-between  mt-8">
                     <img src={LogoMenu} alt='Logo_Menu' />
                     <MdClose size={27}  className='text-white font-black cursor-pointer ' onClick={menuToggleOff}/>
                    </div>
                    <div className="flex flex-col justify-between items-center  mt-12 font-normal">
                       <a href="#" className='px-6 py-4  text-white text-xl font-normal uppercase hover:text-softRed border-y-[.5px]  border-grayishBlue w-full text-center'>Features</a> 
                       <a href="#" className='px-6 py-4  text-white text-xl font-normal uppercase hover:text-softRed  border-b-[.5px]  border-grayishBlue w-full text-center'>Pricing</a> 
                       <a href="#" className='px-6 py-4  text-white text-xl font-normal uppercase hover:text-softRed border-b-[.5px]  border-grayishBlue w-full text-center'>Contact</a> 
                        <a href="#" className='px-8 py-2  mt-6  w-full border-2 uppercase text-center text-xl rounded text-white font-medium border '>Login</a> 
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-8 mt-32">
                      <GrFacebook  size={27} className='text-white'/>
                      <FaTwitterSquare size={30} className='text-white'/>
                    </div>
                  </div>
                }
         </div>
      </div>
    </nav>
  )
}

export default Navbar
