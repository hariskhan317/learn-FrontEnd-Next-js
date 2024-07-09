import React from 'react'

export default function ({ params }) {
    console.log(params)
  return (
    <div>
      user{params.id}
      </div>
  )
}
 