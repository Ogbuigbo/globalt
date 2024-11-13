import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col gap-5 items-center justify-center mt-8'>
      <h1 className='font-bold text-4xl text-center'>Welcome to Glorious T&T Agency</h1>
      <p className='md:text-center md:w-[600px] px-4 text-justify'>Welcome to Glorious T&T Agency, your ultimate destination for seamless travel, real estate endeavors, and foreign language mastery. At Glorious T&T, we pride ourselves on being a one-stop shop that caters to your diverse needs, ensuring that your experiences abroad are nothing short of magnificent.
      </p>
      <div className='flex gap-6 flex-col md:flex-row'>
        <button className='bg-[#23297f] text-white py-2 px-4 rounded-lg'>
            Explore Travel Services
        </button>
        <button className='border border-[#23297f] text-[#23297f] rounded-lg py-2 px-4'>
            Discover Real Estate Listings
        </button>
      </div>
    </div>
  )
}

export default Hero
