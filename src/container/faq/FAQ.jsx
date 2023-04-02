import React from 'react'
import FAQText from '../../components/faq/FAQText'
import FAQBox from '../../components/faq/FAQBox'
const FAQ = () => {
  return (
    <div className='mt-16 flex flex-col space-y-8 md:px-8 py-4 border   '>
      <FAQText/>
      <FAQBox/>
      <div className='mx-auto'>
        <a href="#" className=" hidden px-5  rounded font-medium py-3 text-center text-white bg-softBlue md:block">
                          More Info
                         </a>
      </div>
    </div>
  )
}

export default FAQ
