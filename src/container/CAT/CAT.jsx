import React from 'react'

const CAT = () => {
  return (
    <section id='cat' className='bg-softBlue py-12 mt-8 '>
      <div className="flex flex-col items-center justify-between space-y-4  px-4 py-4  md:px-16">
        <h2 className="text-center text-md text-white uppercase font-medium">
           35,000+  already  joined 
        </h2>
        <h1 className="text-center text-2xl text-white font-medium md:text-4xl md:max-w-lg">
           Stay up-to-date with what we’re doing 
        </h1>
        <div className="">
                    <form action="" className=' flex flex-col space-y-4 md:flex-row md:items-center md:justify-around  md:space-x-2  md:space-y-0'>
                        <input type="text" placeholder='Enter your email adress' className='h-11 p-4  md:basis-2/4 rounded-md ' />
                        <a href='#' className='bg-softRed px-8 py-3 rounded-md  text-white text-center font-bold text-md md:basis-2/4'>Contact Us</a>
                    </form>
         </div>
      </div>
    </section>
  )
}

export default CAT
