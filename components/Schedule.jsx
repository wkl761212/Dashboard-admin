"use client"

import React, { useState } from 'react'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
function Schedule() {
  const [value, onChange] = useState(new Date()); 
  return (
    <div className='bg-white flex justify-center items-start w-full border p-16 rounded-lg'>
      
      <div className='m-4 flex-none'>
      <Calendar
        onChange={onChange}
        value={value}
      />

      </div>
      {/* Right side content can go here. It will be empty for now but can be used for additional content in the future. */}
      <div className='flex-grow'>
        {/* Future content like a form for schedule details */}
      </div>
    </div>
  )
}

export default Schedule;