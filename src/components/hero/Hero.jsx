import React from 'react'
import MainImage from '../../assets/illustration-hero.svg'
const Hero = () => {
  return ( 
    <section id='hero' className='container mx-auto'>
      <div className="flex flex-col space-y-2 items-center justify-between   px-8 py-2 md:flex-row-reverse md:items-start  md:mt-16">
       <div className="md:w-1/2 "  >

       <img src={MainImage} alt='Hero_Image' className='' />
        </div>
      <div className="flex flex-col items-center justify-between space-y-8 py-4   md:px-2 md:pt-16 md:w-1/2  md:items-start  md:mt-0">
        <h1 className="font-medium text-3xl text-center text-veryDarkBlue md:text-left md:text-5xl ">
            A Simple Bookmark Manager
        </h1>
        <p className="text-md text-center text-grayishBlue max-w-s-xm md:max-w-md md:text-left">
          A  clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free. 
        </p>
        <div className="flex flex-row items-center justify-between space-x-4">
            <a href="#" className="px-5 py-3 md:px-3 rounded border-2 text-center bg-softBlue text-white text-sm font-medium hover:bg-white hover:text-softBlue hover:border-softBlue "> Get it on Chrome</a>
            <a href="#" className="px-5 py-3 md:px-3  border-2 text-center rounded text-grayishBlue font-medium  hover:border-softBlue hover:text-grayishBlue hover:border-grayishBlue"> Get it on Firefox </a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero
