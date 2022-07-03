import React, { useState } from 'react'
import FeaturedProject from './FeaturedProject'
import Heading from './Heading'
import './Work.css'
import projects from './projects.json'
import OtherProject from './OtherProject'
import otherProjects from './otherProjects.json'
import { Element } from 'react-scroll'

function Work() {
  const [value, setValue] = useState(3)
  const [showProject, setShowProject] = useState(false)

  const handleShowProject = () => {
    setShowProject(!showProject)
    showProject ? setValue(3) : setValue(otherProjects.length)
  }

  return (
    <Element id='/work'>
      <div className='work'>
        <Heading section='03.' title='Some Things I’ve Built' />
        <div className='work__projects'>
          {projects.map((project, index) => (
            <FeaturedProject project={project} index={index} />
          ))}
        </div>
        <div className='work__otherProjects'>
          <h1>Other Noteworthy Projects</h1>
          <span>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href=''>view the archive</a>
          </span>
          <div className='work__otherProjectsContainer'>
            {otherProjects.map(
              (otherProject, index) =>
                index < value && <OtherProject otherProject={otherProject} />
            )}
          </div>
          <div className='work__otherProjectsButton'>
            <button onClick={handleShowProject}>
              {showProject ? 'Show less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Work
