import React from 'react'
import Chrome from '../../assets/logo-chrome.svg'
import Firefox from '../../assets/logo-firefox.svg'
import Opera from '../../assets/logo-opera.svg'
const Download = () => {
  return (
    <section id='download' className='container mx auto  mt-16 md:px-32'>
         

         <div className="flex flex-col space-y-4 justify-between items-center px-16">
        <h1 className="text-center text-4xl font-medium text-veryDarkBlue">
       Download the extension
        </h1>
        <p className="text-center text-md max-w-xl text-grayishBlue">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
        </p>
       </div>
 
       <div className=" flex flex-col mt-8 items-center justify-between space-y-8  md:flex-row py-8 md:items-baseline md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-6 shadow-2xl p-4 border ">
            <img src={Chrome} alt='Chrome_Logo' />
             <h3 className="text-md text-veryDarkBlue">
                Add to Chrome
             </h3>
             <p className="text-sm text-grayishBlue">
                Minimun version 62
             </p>
             <div class=" w-full border border-dashed border-gray-300 h-px"></div>


             <a href="#" className="rounded font-medium px-12 py-3 border-2 text-center bg-softBlue text-white hover:text-softBlue hover:bg-white hover:border-softBlue">
                Add & Install Extension
             </a>
        </div>
        <div className="flex flex-col items-center justify-between space-y-6 shadown-2xl border p-4 " >
            <img src={Firefox} alt='Chrome_Logo' />
             <h3 className="text-md text-veryDarkBlue">
                Add to Firefox
             </h3>
             <p className="text-sm text-grayishBlue">
                Minimun version 55
             </p>
             <div class=" w-full border border-dashed border-gray-300 h-px"></div>


             <a href="#" className=" rounded font-medium px-12 py-3 border-2 text-center bg-softBlue text-white hover:text-softBlue hover:bg-white hover:border-softBlue">
                Add & Install Extension
             </a>
        </div>

        <div className="flex flex-col items-center justify-between space-y-6  shadow-2xl p-4 mt-60" >
            <img src={Opera} alt='Chrome_Logo' />
             <h3 className="text-md text-veryDarkBlue">
                Add to Opera
             </h3>
             <p className="text-sm text-grayishBlue">
                Minimun version 46
             </p>
             <div class=" w-full border border-dashed border-gray-300 h-px"></div>


             <a href="#" className="rounded font-medium px-12 py-3 border-2 text-center bg-softBlue text-white hover:text-softBlue hover:bg-white hover:border-softBlue">
                Add & Install Extension
             </a>
        </div>
    </div>
    </section>
  )
}

export default Download
