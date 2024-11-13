import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

function Curious() {
  return (
    <div className='bg-[#C5B6E0] flex flex-col items-center md:px-[50px] px-[15px] pb-[50px] py-4 rounded-lg pt-[70px] md:my-[120px]'>
      <h1 className='font-bold lg:text-6xl text-3xl text-center'>Curious Minds Ask</h1>

    <div className='w-full px-4 bg-white rounded-lg  py-[30px] mt-8'>
    <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-4xl text-2xl'>What makes Us Different</AccordionTrigger>
        <AccordionContent className='lg:text-2xl text-lg'>
        We don’t just sell trips; we sell experiences! Our team is made up of travel junkies who have been there, done that, and got the t-shirt. We know the ins and outs of every destination, ensuring you get the best of the best!
        </AccordionContent>
    </AccordionItem>
    </Accordion>
    </div>

    <div className='w-full px-4 bg-white rounded-lg  py-[30px] mt-8'>
    <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-4xl text-2xl'>How do I book a trip?</AccordionTrigger>
        <AccordionContent className='lg:text-2xl text-lg'>
        Booking with us is as easy as pie! Just give us a call, send us an email, or slide into our DMs. We’ll take care of the rest while you sit back and dream about your next adventure!
        </AccordionContent>
    </AccordionItem>
    </Accordion>
    </div>

    <div className='w-full px-4 bg-white rounded-lg  py-[30px] mt-8'>
    <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
        <AccordionTrigger className='lg:text-4xl text-2xl'>Can I customize my itinerary?</AccordionTrigger>
        <AccordionContent className='lg:text-2xl text-lg'>
        Absolutely! We thrive on creativity and love crafting unique itineraries tailored just for you. Want to visit a llama farm in Peru? We’re on it!
        </AccordionContent>
    </AccordionItem>
    </Accordion>
    </div>

    </div>
  )
}

export default Curious
