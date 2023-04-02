import React, { useState } from 'react'
import imageTab1 from '../../assets/illustration-features-tab-1.svg'
import imageTab2 from '../../assets/illustration-features-tab-2.svg'
import imageTab3 from '../../assets/illustration-features-tab-3.svg'
const FeatureBox = () => {
  const [openTab,setOpenTab]=useState(1)
  return (
   <>
    <div className="w-full  flex justify-center items-center">
        <ul className="flex list-none flex-col justify-between   md:space-x-8 -b-red items-center  md:flex-row "
         role='tablist'
        >
            <li className="text-center ">
                 <a
                className={
                  "text-md font-bold text-grayishBlue  px-10 py-4 shadow  block  cursor-pointer hover:text-softRed " +
                  (openTab === 1
                    ? "text-veryDarkBlue border-b-4 border-softRed"
                    : "")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                 href="#link1"
                role="tablist"
              >
               Simple Bookmarking
              </a>
            </li>
           <li className="text-center">
                   <a
                className={
                  "text-md font-bold text-grayishBlue  px-10 py-4 shadow  block  cursor-pointer hover:text-softRed" +
                  (openTab === 2
                    ? "text-veryDarkBlue border-b-4 border-softRed"
                    : "")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                 href="#link1"
                role="tablist"
              >
              Speedy Searching
              </a>
            </li>
            <li className="text-center ">
                    <a
                className={
                  "text-md font-bold text-grayishBlue  px-10 py-4 shadow  block  cursor-pointer hover:text-softRed" +
                  (openTab === 3
                    ? "text-veryDarkBlue border-b-4 border-softRed"
                    : "")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
             Easy Sharing
              </a>
            </li>
        </ul>
    </div>
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div className='flex flex-col items-center justify-between space-y-8  md:flex-row  md:px-24 md:space-x-24 md:py-8'>
                      <img src={imageTab1} alt='Image_Tab_1' />
                      <div className="flex flex-col items-center justify-between space-y-8 md:items-start">
                         <h1 className="text-center  text-veryDarkBlue text-2xl font-medium md:text-4xl md:text-left">
                          Bookmark in one click
                         </h1>
                         <p className="text-center text-md  text-grayishBlue md:text-left">
                          Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                         </p>
                         <a href="#" className=" hidden px-5  rounded font-medium py-3 text-center text-white bg-softBlue md:block ">
                          More Info
                         </a>
                      </div>
                    </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className='flex flex-col items-center justify-between space-y-8  md:flex-row  md:px-24 md:space-x-24 md:py-8'>
                      <img src={imageTab2} alt='Image_Tab_2' />
                      <div className="flex flex-col items-center justify-between space-y-8 md:items-start">
                         <h1 className="text-center  text-veryDarkBlue text-2xl font-medium md:text-4xl md:text-left ">
                           Intelligent search
                         </h1>
                         <p className="text-center text-md  text-grayishBlue md:text-left">
                         Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks. More Info Share your bookmarks
                         </p>
                         <a href="#" className=" hidden px-5  rounded font-medium py-3 text-center text-white bg-softBlue md:block">
                          More Info
                         </a>
                      </div>
                    </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className='flex flex-col items-center justify-between space-y-8  md:flex-row  md:px-24 md:space-x-24 md:py-8'>
                      <img src={imageTab3} alt='Image_Tab_2' />
                      <div className="flex flex-col items-center justify-between space-y-8 md:items-start">
                         <h1 className="text-center  text-veryDarkBlue text-2xl font-medium md:text-left md:text-4xl">
                           Share your bookmarks
                         </h1>
                         <p className="text-center text-md  text-grayishBlue md:text-left">
                       Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button. 
                         </p>
                         <a href="#" className=" hidden px-5  rounded font-medium py-3 text-center text-white bg-softBlue md:block">
                          More Info
                         </a>
                      </div>
                    </div>
                </div>
              </div>
            </div>
    </div>
       
   </>
   
  )
}

export default FeatureBox
