import React from 'react'
import FeatureText from '../../components/feature/FeatureText'
import FeatureBox from '../../components/feature/FeatureBox'
const Feature = () => {
  return (
    <div className='mt-16 flex flex-col space-y-8 px-8 py-4 '>
      <FeatureText/>
      <FeatureBox/>
    </div>
  )
}

export default Feature
