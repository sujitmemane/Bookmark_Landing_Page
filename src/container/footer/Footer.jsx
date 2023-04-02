import React from 'react'
 import Logo from '../../assets/logo-footer.svg'
 import {GrFacebook} from 'react-icons/gr'
 import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <section id='footer' className='bg-veryDarkBlue  '>
      <div className="flex flex-col items-center justify-between space-y-8 mx-auto container py-8 px-4 md:flex-row md:space-y-0 md:px-16">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row  md:items-center md:space-x-4 md:space-y-0 ">
            <img src={Logo} alt='Logo' className='' />
            <p className='text-white uppercase cursor-pointer  hover:text-softRed'>Features</p>
            <p className='text-white uppercase  cursor-pointer  hover:text-softRed'>Pricing</p>
            <p className='text-white uppercase  cursor-pointer  hover:text-softRed'>Contact</p>
        </div>
        <div className="flex flex-row items-center justify-between space-x-8">
         <GrFacebook size={25} className='text-white cursor-pointer  hover:text-softRed'/>
         <BsTwitter size={25} className='text-white cursor-pointer  hover:text-softRed'/>
        </div>
      </div>
    </section>
  )
}

export default Footer
