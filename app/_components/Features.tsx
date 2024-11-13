'use client'

import React, { useState } from 'react'
import Image from 'next/image'



const Features1 = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="w-full flex md:p-[80px] p-[20px] items-center flex-col mt-[50px] md:mt-0  ">
        <div className="w-full 2xl:flex 2xl:justify-evenly items-center  grid grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="flex h-full ">
            {activeTab === 0 && (
              <Image
                alt='splash'
                src='https://images.unsplash.com/photo-1548625149-720134d51a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyM3w&ixlib=rb-4.0.3&q=80&w=1080'
                width={400}
                height={300}
                className='w-[500px] md:h-[400px] h-[250px] object-cover rounded-lg 2xl:w-[700px] 2xl:h-[700px]'
              />
            )}
            {activeTab === 1 && (
             <Image
             alt='splash'
             src='https://images.unsplash.com/photo-1556276797-5086e6b45ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyMXw&ixlib=rb-4.0.3&q=80&w=1080'
             width={400}
             height={300}
             className='w-[500px] md:h-[400px] h-[250px] object-cover rounded-lg'
           />
            )}
            {activeTab === 2 && (
             <Image
             alt='splash'
             src='https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyMnw&ixlib=rb-4.0.3&q=80&w=1080'
             width={400}
             height={300}
             className='w-[500px] md:h-[400px] rounded-lg'
           />
            )}
          </div>
          <div className=" flex items-start flex-col justify-center gap-8 mt-10">
            <div
              onClick={() => setActiveTab(0)}
              className="cursor-pointer flex overflow-hidden place-self-stretch items-center shrink-0 gap-6"
            >
              <div className="flex self-stretch items-start gap-6">
                {activeTab === 0 && (
                  <div className="w-[2px] self-stretch bg-black"></div>
                )}
              </div>
              <div className="features1-content1">
                <h2 className="lg:text-[35px] text-[28px] font-semibold leading-[1.5]">Travel Services</h2>
                <span className="text-justify">
                Embark on your global adventures with confidence and ease. Our agency specializes in comprehensive travel arrangements that include ticketing, hotel reservations, and visa application assistance. Whether you're planning a leisurely getaway or pursuing educational opportunities with a study visa, we're here to make your dream journey a reality. With Glorious T&T, every trip abroad is a step towards unforgettable experiences.
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="cursor-pointer flex overflow-hidden place-self-stretch items-center shrink-0 gap-6"
            >
              <div className="flex self-stretch items-start gap-6">
                {activeTab === 1 && (
                  <div className="w-[2px] self-stretch bg-black"></div>
                )}
              </div>
              <div className="features1-content1">
                <h2 className="lg:text-[35px] text-[28px] font-semibold leading-[1.5]">Real Estate Service</h2>
                <span className="text-justify">
                Explore the world of real estate possibilities with us. Glorious T&T is your trusted partner in renting, selling, leasing, and purchasing properties. We strive to connect you to your ideal investment, be it a cozy home or a lucrative commercial property. Our expert team is dedicated to ensuring that your real estate ventures are as rewarding as you envision.
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="cursor-pointer flex overflow-hidden place-self-stretch items-center shrink-0 gap-6"
            >
              <div className="flex self-stretch items-start gap-6">
                {activeTab === 2 && (
                  <div className="w-[2px] self-stretch bg-black"></div>
                )}
              </div>
              <div className="features1-content1">
                <h2 className="lg:text-[35px] text-[28px] font-semibold leading-[1.5]">Foreign Language Learning</h2>
                <span className="text-justify">
                Broaden your horizons and enhance your global communication skills with our esteemed language programs. Recognized as one of the best in Africa, we offer engaging and accessible language courses in German, French, Spanish, and Korean. Our innovative approach makes learning simple and enjoyable, equipping you with the tools to connect in an increasingly globalized world.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Features1
