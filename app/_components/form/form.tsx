"use client"
import React, { useRef, useState } from "react"
import { handleSubmit } from "./action"
import { toast } from "react-toastify"
import CountrySelector from "./country"
import CalendarComponent from "./calendar"

function Form() {
  const ref = useRef<HTMLFormElement>(null)

  // State to store selected country and dates
  const [selectedCountry, setSelectedCountry] = useState<string>("")
  const [dob, setDob] = useState<Date | undefined>(undefined)
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>(undefined)
  const [departureDate, setDepartureDate] = useState<Date | undefined>(undefined)

  const _handleSuccess = () => {
    toast.dark("Your message has been received. We will get back to you shortly")
    ref.current?.reset()
  }

  const _handleError = () => {
    toast.dark("An error occurred while sending your message. Please try again later.")
  }

  const _handleSubmit = async (formData: FormData) => {
    // Append the selected dates and country to formData
    formData.append("dob", dob ? dob.toISOString() : "")
    formData.append("arrivalDate", arrivalDate ? arrivalDate.toISOString() : "")
    formData.append("departureDate", departureDate ? departureDate.toISOString() : "")
    formData.append("country", selectedCountry)

    const resp = await handleSubmit(formData)
    if (resp) {
      _handleSuccess()
    } else {
      _handleError()
    }
  }

  return (
    <section className="bg-gray-100 mt-[60px] shadow-md px-2">
      <div className="bg-white p-4 shadow-lg border lg:col-span-3 lg:p-12 w-full">
        <h1 className="font-bold md:text-[24px] mt-[0px] md:mb-[30px] mb-[50px] md:ml-0 text-[24px]">
          Send Us a Message
        </h1>
        <form
          action={_handleSubmit}
          className="space-y-4 flex flex-col gap-8 pb-4"
          ref={ref}
        >
          <div className="grid lg:grid-cols-3 gap-16 sm:grid-cols-1">
            <div>
              <input
                className="w-full border-gray-200 p-2 placeholder-black font-semibold text-sm border-b outline-none text-[20px] text-[#333333]"
                placeholder="Full Name *"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div>
              <input
                className="w-full border-gray-200 p-2 placeholder-black text-sm border-b outline-none text-[20px] font-semibold text-[#333333]"
                placeholder="Email Address *"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div>
              <input
                className="w-full border-gray-200 p-2 placeholder-black text-sm border-b outline-none text-[20px] font-semibold text-[#333333]"
                placeholder="Phone Number *"
                type="tel"
                id="phone"
                name="phone"
                required
              />
            </div>
          </div>

          <div className="xl:grid-cols-4 md:grid-cols-3 grid-cols-1 grid items-center gap-10">
            <CalendarComponent title="Date of Birth" setDate={setDob} />
            <CountrySelector setCountry={setSelectedCountry} />
            <CalendarComponent title="Arrival Date" setDate={setArrivalDate} />
            <CalendarComponent title="Departure Date" setDate={setDepartureDate} />
          </div>

          <div>
            <textarea
              className="w-full border-gray-200 p-2 placeholder-black text-sm border-b outline-none text-[20px] font-semibold text-[#333333]"
              placeholder="Message *"
              rows={8}
              id="message"
              name="message"
              required
            />
          </div>

          <div className="mt-[20px]">
            <button
              type="submit"
              className="inline-block bg-[#23297F] md:px-[24px] md:py-[12px] px-6 py-2 rounded-sm md:rounded-lg text-[14px] font-medium text-white sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form
