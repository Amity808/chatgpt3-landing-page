import React from 'react'
import './Footer.css'
import logo from '../../imags/logo.svg'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='footer_container_header'>
        <h1>Do you want to step in to the <br /> future before others</h1>
      </div>
      <div className='footer_container_btn'>
        <button>Request Early Access</button>
      </div>
      <div className='footer__pgt3'>
        <div className='gpt_footer_section'>
          <img src={logo} alt="Gpt3" />
          <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt_footer_section'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt_footer_section'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt_footer_section'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <br />
      <div>
        <p>@2023 Amity Code for Africa. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
