"use client"

import React, { useState } from 'react'; 
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'; 
function Schedule() {
  const [value, onChange] = useState(new Date()); 
  return (
    <div className=' bg-white flex w-full border p-8 rounded-lg'>
      
      <div className='m-4'>
      <Calendar
        onChange={onChange}
        value={value}
      />

      </div>
      
    </div>
  )
}

export default Schedule;