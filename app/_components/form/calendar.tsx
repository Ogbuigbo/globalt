"use client"
import React, { useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"

interface CalendarProps {
  title: string
  setDate: (date: Date | undefined) => void // Function to pass selected date to the parent
}

function CalendarComponent({ title, setDate }: CalendarProps) {
  const [localDate, setLocalDate] = useState<Date | undefined>(undefined)
  const [open, setOpen] = useState(false)

  // Helper function to format date in the desired format (e.g., "10th September, 2024")
  const formatDate = (date: Date): string => {
    const day = date.getDate()
    const month = date.toLocaleString("default", { month: "long" })
    const year = date.getFullYear()

    // Function to get the day suffix (st, nd, rd, th)
    const getDaySuffix = (day: number): string => {
      if (day > 3 && day < 21) return "th"
      switch (day % 10) {
        case 1: return "st"
        case 2: return "nd"
        case 3: return "rd"
        default: return "th"
      }
    }

    const daySuffix = getDaySuffix(day)
    return `${day}${daySuffix} ${month}, ${year}`
  }

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setLocalDate(selectedDate)
    setDate(selectedDate) // Pass selected date back to parent
    setOpen(false) // Close the popover when a date is selected
  }

  const minDate = new Date(new Date().setHours(0, 0, 0, 0));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex justify-between py-2 px-4 items-center border rounded-lg w-[200px]">
        <span>{localDate ? formatDate(localDate) : title}</span> {/* Format the date */}
        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={localDate}
          onSelect={handleDateSelect}
          disabled={(selectedDate) => selectedDate < minDate} // Disable past dates
          className="rounded-md border"
        />
      </PopoverContent>
    </Popover>
  )
}

export default CalendarComponent
