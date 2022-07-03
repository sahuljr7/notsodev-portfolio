import React from 'react'
import './Heading.css'

function Heading({ title, section }) {
  return (
    <div className='heading'>
      <div className='heading__title'>
        <span>{section}</span>
        {title}
        <div className='heading__title--hr'></div>
      </div>
    </div>
  )
}

export default Heading
