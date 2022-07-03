import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import './Experience.css'
import data from './data.json'
import Tab from './Tab'
import { Element } from 'react-scroll'

function Experience() {
  const [value, setValue] = useState(0)

  return (
    <Element id='/experience'>
      <div className='experience'>
        <Heading section='02.' title='Where I’ve Worked' />
        <div className='experience__tabs'>
          <div className='experience__info'>
            <div className='experience__place'>
              <div className='experience__tabsVertical'>
                <div
                  style={{ transform: `translateY(calc(${value * 43}px))` }}
                ></div>
              </div>
              {data.map((experience, index) => (
                <button
                  onClick={() => {
                    setValue(index)
                  }}
                  className={value === index && 'experience__placeActive'}
                >
                  {experience.place}
                </button>
              ))}
            </div>
            {data.map(
              (experience, index) =>
                index === value && <Tab experience={experience} key={index} />
            )}
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Experience
