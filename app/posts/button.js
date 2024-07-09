'use client'
import React from 'react'

const button = ({email}) => {
  return (
    <div>
      <button onClick={() => console.log(email)} className='bg-green-900 rounded text-white px-4 py-1'>CLick me</button>
    </div>
  )
}

export default button
