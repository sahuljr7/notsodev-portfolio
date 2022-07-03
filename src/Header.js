import React from 'react'
import './Header.css'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

function Header() {
  return (
    <div className='header'>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className='header__logo' href=''>
        <img alt='' src='logo.png' />
      </a>
      <div className='header__links'>
        <ScrollLink
          to='/about'
          spy={true}
          smooth={true}
          duration={500}
          className='header__link'
        >
          <span>01.</span>
          About
        </ScrollLink>
        <ScrollLink
          to='/experience'
          spy={true}
          smooth={true}
          duration={500}
          className='header__link'
        >
          <span>02.</span>
          Experience
        </ScrollLink>
        <ScrollLink
          to='/work'
          spy={true}
          smooth={true}
          duration={500}
          className='header__link'
        >
          <span>03.</span>
          Work
        </ScrollLink>
        <ScrollLink
          to='/contact'
          spy={true}
          smooth={true}
          duration={500}
          className='header__link'
        >
          <span>04.</span>
          Contact
        </ScrollLink>
      </div>
      <a href='https://sahulkumarparida.vercel.app/resume.pdf' target='_blank'>
        <button>Resume</button>
      </a>
    </div>
  )
}

export default Header
