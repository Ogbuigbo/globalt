import React from 'react'


function Message() {
  return (
    <div className='mb-[50px] px-2 w-full'>
      <h1 className='text-4xl font-bold mb-[20px]'>Glorious T&T Agency Awaits You</h1>
      <p className='md:text-2xl text-justify'>
      Embark on your global adventures with confidence and ease. Our agency specializes in comprehensive travel arrangements that study travel, hotel reservations, and visa application assistance. Whether you're planning a leisurely getaway or pursuing educational opportunities with a study visa, we're here to make your dream journey a reality. With Glorious T&T, every trip abroad is a step towards unforgettable experiences.
      </p>

      

      <div className='flex flex-col md:flex-row items-center justify-center  lg:gap-10 gap-5 px-4'>
      <div className='mt-[50px] bg-[#585AB3] text-white py-2 px-6 rounded-lg'>
        <h1 className='text-2xl'>Are You Looking to Study Abroad?</h1>
        <p className='lg:w-[400px] text-justify'>Are you looking to apply for a low tution University in Europe, North America, and Asia. Click and Fill in your option in the form below</p>
      </div>
      <div className='mt-[50px] border border-black py-2 px-6 rounded-lg'>
        <h1 className='text-2xl'>Are You Looking Hotel Reservation Abroad?</h1>
        <p className='lg:w-[400px] text-justify'>Reserve your hotels and Accomodation anywhere in the world at a discounted price. Click and Fill in your option in the form below</p>
      </div>
      </div>
     

      <div className='flex items-center justify-between mt-[100px]'>

        <div className='flex flex-col items-center text-center gap-4'>
            <h1 className='lg:text-6xl md:text-4xl text-2xl font-bold text-[#585AB3]'>10,000+</h1>
            <p className='lg:text-2xl md:text-xl text-lg font-semibold'>Happy Travellers</p>
        </div>

        <div className='flex flex-col items-center justify-center text-center gap-4'>
            <h1 className='lg:text-6xl md:text-4xl text-2xl font-bold text-[#585AB3]'>5000+</h1>
            <p className='lg:text-2xl md:text-xl text-lg font-semibold'>Destinations Explored</p>
        </div>

        <div className='flex flex-col items-center text-center gap-4'>
            <h1 className='lg:text-6xl md:text-4xl text-2xl  font-bold text-[#585AB3]'>1000+</h1>
            <p className='lg:text-2xl md:text-xl text-lg font-semibold'>Adventures Created</p>
        </div>
      </div>
    </div>
  )
}

export default Message
