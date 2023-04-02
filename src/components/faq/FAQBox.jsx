import React from 'react'
import { useState } from 'react'
import Accordion from './Accordion'
const Dummy_Questions=[
  {
    id:'01',
    question:'What is Bookmark?',
    answer:' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis. ',
    open:false,

  },
   {
    id:'02',
    question:'How can I request a new browser? ',
    answer:'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ltricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    open:false,

  },
   {
    id:'03',
    question:'Is there a mobile app?',
    answer:'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
    open:true,

  },
   {
    id:'04',
    question:'What about other Chromium browsers? ',
    answer:'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    open:false,

  }
]

const FAQBox = () => {
 const [questions,setQuestions]=useState(Dummy_Questions)
function mainToggleHandler(id){
  const updatedQuestions=questions.map(question=> {
   if (question.id === id) {
        return {
          ...question,
          open: !question.open,
        };
      }
   return {
    ...question,
    open:false,
   }
    
})
setQuestions(updatedQuestions)
}
  return (
    <div className='flex flex-col items-center justify-between space-y-4 md:px-32   md:mx-32 md:my-16'>
      {questions.map(item=><Accordion key={item.id} id={item.id} question={item.question} answer={item.answer} open={item.open} getId={mainToggleHandler}/>)}
    </div>
  )
}

export default FAQBox
