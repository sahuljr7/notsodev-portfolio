import React from 'react'
import './Tab.css'
import data from './data.json'
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined'

function Tab({ experience }) {
  return (
    <div className='tab'>
      <>
        <h3>
          {experience.role} <span>@</span> <a href=''>{experience.place}</a>
        </h3>
        <span>{experience.duration}</span>
        <div className='tab__infoContainer'>
          {experience.info.map((singleInfo) => (
            <div className='tab__info'>
              <ArrowRightOutlinedIcon />
              <p>{singleInfo}</p>
            </div>
          ))}
        </div>
      </>
    </div>
  )
}

export default Tab
