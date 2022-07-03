import React from 'react'
import './OtherProject.css'
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'

function OtherProject({ otherProject }) {
  return (
    <div className='otherProject'>
      <div className='otherProject__icons'>
        <FolderOutlinedIcon />
        {otherProject.github && (
          <a href={otherProject.github}>
            <GitHubIcon />
          </a>
        )}
        <a href={otherProject.live}>
          <LinkIcon />
        </a>
      </div>
      <h3>{otherProject.title}</h3>
      <p>{otherProject.info}</p>
      <div className='otherProject__techStack'>
        {otherProject.techStack.map((techStackItem) => (
          <small>{techStackItem}</small>
        ))}
      </div>
    </div>
  )
}

export default OtherProject
