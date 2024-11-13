'use client'

import React, { useState } from 'react'
import Image from 'next/image'

function Feature2() {
    const [activeTab, setActiveTab] = useState(0)
    return (
      <>
        <div className="w-full flex md:p-[80px] p-[20px] items-center flex-col mt-[50px] md:mt-0">
          <div className="w-full 2xl:flex   justify-evenly items-center grid grid-col-1 md:grid-cols-2 gap-8">
          <div className="flex h-full md:hidden">
              {activeTab === 0 && (
                <Image
                  alt='splash'
                  src='https://images.unsplash.com/photo-1483794344563-d27a8d18014e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyMnw&ixlib=rb-4.0.3&q=80&w=1080'
                  width={400}
                  height={400}
                  className='w-[500px] md:h-[400px]  rounded-lg'
                />
              )}
              {activeTab === 1 && (
               <Image
               alt='splash'
               src='https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyM3w&ixlib=rb-4.0.3&q=80&w=1080'
               width={400}
               height={400}
               className='w-[500px] md:h-[400px] rounded-lg'
             />
              )}
              {activeTab === 2 && (
               <Image
               alt='splash'
               src='https://images.unsplash.com/photo-1497302347632-904729bc24aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyMXw&ixlib=rb-4.0.3&q=80&w=1080'
               width={400}
               height={400}
               className='w-[500px] md:h-[400px] rounded-lg'
             />
              )}
            </div>
            <div className=" flex items-start flex-col justify-center gap-8">
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
                  <h2 className="lg:text-[35px] text-[28px] font-semibold leading-[1.5]">Travel Agency Services</h2>
                  <span className="text-justify">
                  Explore our wide range of travel services including flight bookings, hotel reservations, and customized travel packages.
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
                  <h2 className="lg:text-[35px] text-[28px] font-semibold leading-[1.5]">Real Estate Listings</h2>
                  <span className="text-justify">
                  Discover our diverse portfolio of real estate listings including residential properties, commercial spaces, and investment opportunities.
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
                  <h2 className="lg:text-[35px] text-[28px] font-semibold leading-[1.5]">English Online Learning Platform</h2>
                  <span className="text-justify">
                  Enhance your English language skills with our interactive online learning platform offering courses for all proficiency levels.
                  </span>
                </div>
              </div>
            </div>
            <div className="md:flex h-full hidden">
              {activeTab === 0 && (
                <Image
                  alt='splash'
                  src='https://images.unsplash.com/photo-1483794344563-d27a8d18014e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyMnw&ixlib=rb-4.0.3&q=80&w=1080'
                  width={400}
                  height={400}
                  className='w-[500px] h-[500px] rounded-lg'
                />
              )}
              {activeTab === 1 && (
               <Image
               alt='splash'
               src='https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyM3w&ixlib=rb-4.0.3&q=80&w=1080'
               width={400}
               height={400}
               className='w-[500px] h-[500px] rounded-lg'
             />
              )}
              {activeTab === 2 && (
               <Image
               alt='splash'
               src='https://images.unsplash.com/photo-1497302347632-904729bc24aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNTAxODgyMXw&ixlib=rb-4.0.3&q=80&w=1080'
               width={400}
               height={400}
               className='w-[500px] h-[500px] rounded-lg'
             />
              )}
            </div>
          </div>
        </div>
       
      </>
    )
  }

export default Feature2
