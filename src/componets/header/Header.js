import React from 'react'
import './Header.css'
import people from '../../imags/people.png'
import ai from '../../imags/ai.png'
import google from '../../imags/google.png'
import slack from '../../imags/slack.png'
import atlast from '../../imags/atlassian.png'
import dropbox from '../../imags/dropbox.png'
import shopify from '../../imags/shopify.png'

const Header = () => {
  return (
    <>
    <div className='header section__padding' id='home'>
      <div className='header_content'>
        <h1 className='openaih'>
        Let&apos;s Build Something <br /> amazing with GPT-3 <br /> OpenAI
        </h1>
        <p className='ptag'>Yet bed any for travelling assistance indulgence unpleasing. <br /> Not thoughts all exercise blessing. Indulgence way <br /> everything joy alteration boisterous the attachment. Party <br /> we years to order allow asked of.</p>
        
        <div className='get_started'>
          <input type="email" placeholder='Your Email Address' className='inputtext'/>
          <button type='button' className='btn-header'>Get Started</button>
        </div>
        <div className='people_name'>
          <img src={people} alt="" />
          <p className='people_tag'>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='ai_img'>
        <img src={ai} alt="ai_image" className='imgai'/>
      </div>
    </div>
    <div className='groupcollection'>
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlast} alt="atlassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
  </div>
  </>
  )
}

export default Header
