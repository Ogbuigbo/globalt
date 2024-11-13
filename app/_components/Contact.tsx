import React from 'react';
import Email from '@/assets/Email';

function Contact() {
  return (
    <div className='felx flex-col thq-section-padding '>
        <div className='flex flex-col gap-10 items-center justify-center'>
        <h2 className='text-[38px] font-bold'>Contact Us</h2>
        <p className='text-center'>Our team is here to help you with any inquiries you may have.</p>
        </div>

        <div className='mt-10 flex flex-col gap-6 md:flex-row items-center justify-evenly w-full'>
            <div className='flex flex-col lg:gap-8 gap-4 items-center'>
            <svg viewBox="0 0 1024 1024" className="w-[50px]">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
                <h2 className='thq-heading-2'>Email</h2>
                <p className='w-[200px] thq-body-large font-medium'>We strive to respond to all messages within 24 hours.</p>
                <p className='thq-body-small'>solutionmedia@gmail.com</p>
            </div>

            <div className='flex flex-col lg:gap-8 gap-4  items-center'>
            <svg viewBox="0 0 1024 1024" className="w-[50px]">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
                <h2 className='thq-heading-2'>Phone</h2>
                <p className='w-[200px] thq-body-large'>Follow us on social media for updates and travel tips.</p>
                <p className='thq-body-small'>+234 9094142307</p>
            </div>

            <div className='flex flex-col lg:gap-8 gap-4  items-center'>
            <svg viewBox="0 0 1024 1024" className="w-[50px]">
                <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
              </svg>
                <h2 className='thq-heading-2'>Office</h2>
                <p className='w-[200px] thq-body-large'>We look forward to hearing from you!</p>
                <p className='thq-body-small'>123 Main Street, City, Country</p>
            </div>
        </div>
    </div>
  )
}

export default Contact
