import React from 'react'
import './FeaturedProject.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkIcon from '@material-ui/icons/Link'

function FeaturedProject({ project, index }) {
  return (
    <div className='featuredProject'>
      <div
        className='featuredProject__left'
        style={{ order: index === 1 && '1' }}
      >
        <a href={project.live}>
          <img src={project.image} alt='' />
        </a>
      </div>
      <div
        className='featuredProject__right'
        style={{ textAlign: index % 2 !== 0 && 'left' }}
      >
        <span>Featured Project</span>
        <h1>{project.title}</h1>
        <div
          className='featuredProject__info'
          style={{
            marginLeft: index % 2 === 0 && '-40px',
            marginRight: index % 2 !== 0 && '-40px',
            overflow: index % 2 !== 0 && 'overlay',
          }}
        >
          <p>{project.info}</p>
        </div>
        <div className='featuredProject__techList'>
          {project.techList.map((techListItem) => (
            <small>{techListItem}</small>
          ))}
        </div>
        <div className='featuredProject__links'>
          <a href={project.github}>
            <GitHubIcon />
          </a>
          <a href={project.live}>
            <LinkIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProject
