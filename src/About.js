import React from 'react'
import './About.css'
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined'
import Heading from './Heading'
import { Element } from 'react-scroll'

function About() {
  const skill = (technology) => (
    <div className='about__skill'>
      <ArrowRightOutlinedIcon />
      <p>{technology}</p>
    </div>
  )

  return (
    <Element id='/about'>
      <div className='about'>
        <Heading section='01.' title='About Me' />
        <div className='about__info'>
          <div className='about__left'>
            <p>
              Hello! I'm NotSoDev, a software developer based in Chandigarh, India.{' '}
              <br />
              <br /> I enjoy creating things that live on the internet, whether
              that be websites, applications, or anything in between. My goal is
              to always build products that provide pixel-perfect, performant
              experiences. <br />
              <br />
              Currently I am doing my graduation from{' '}
              <a href='https://www.twitter.com'>Chandigarh University</a> , I
              joined the community at{' '}
              <a href='https://www.twitter.com'>notSo Developers</a> where I work on
              a wide variety of interesting and meaningful projects on a daily
              basis. <br />
              <br />
              Here are a few technologies I've been working with recently:
            </p>
            <div className='about__skills'>
              <div className='about__skillsRow'>
                {skill('JavaScript (ES6+)')}
                {skill('HTML & (S)CSS')}
              </div>
              <div className='about__skillsRow'>
                {skill('React')}
                {skill('Vue')}
              </div>
              <div className='about__skillsRow'>
                {skill('Node.js')}
                {skill('WordPress')}
              </div>
            </div>
          </div>
          <div className='about__right'>
            <img
              src='https://images.unsplash.com/photo-1608848941236-55f915f782d7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
              alt=''
            />
            <div className='about__image--border'></div>
          </div>
        </div>
      </div>
    </Element>
  )
}

export default About
