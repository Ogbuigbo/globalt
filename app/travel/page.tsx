import React from 'react'
import ContactUsForm from '../_components/form'
import Curious from './Curious'
import Message from './Message'
import Hero from './Hero'




function page() {
  return (
    <div>
      <Hero/>
    <div className='lg:mx-[120px] mt-[30px] md:mx-8 mx-4'>
        <Message/>
        <Curious/>
      <ContactUsForm/>
    </div>
    </div>
  )
}

export default page
