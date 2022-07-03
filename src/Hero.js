import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
      <span>Hi, my name is</span>
      <h1 className='hero__title'>NotSoDev.</h1>
      <h1 className='hero__subtitle'>I build things for the web.</h1>
      <p>
        I'm a software developer based in Chandigarh, India specializing in building
        (and occasionally designing) exceptional websites, applications, and
        everything in between.
      </p>
      <a href='mailto: notsodev425@gmail.com'>
        <button>Get In Touch</button>
      </a>
    </div>
  )
}

export default Hero
