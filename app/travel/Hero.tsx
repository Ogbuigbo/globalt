import React from 'react'
import ImageScroll from '../_components/ImageScroll'
import { IMAGES } from '../utils/data'

function Hero() {
  return (
    <div className='mb-[100px]  w-full'>
        <h1 className='text-6xl font-bold text-center text-[#23297F]'>Explore the World</h1>
      <ImageScroll images={IMAGES} slideContainerClass='border lg:pb-10 pb-4 rounded-lg' button='Book Me' showButton />
    </div>
  )
}

export default Hero
