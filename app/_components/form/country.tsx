import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

interface CountrySelectorProps {
  setCountry: (country: string) => void // Function to pass selected country to the parent
}

function CountrySelector({ setCountry }: CountrySelectorProps) {
  const [value, setValue] = useState<any>(null)
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (selectedOption: any) => {
    setValue(selectedOption)
    setCountry(selectedOption.label) // Pass selected country back to parent
  }

  return <Select 
            className='w-[200px] text-black border-black' 
            options={options} 
            value={value} 
            onChange={changeHandler} 
            placeholder='Pick a Country' 
          />
}

export default CountrySelector
