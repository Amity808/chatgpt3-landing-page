import React from 'react'
import './Possibility.css'
import Possibility_img from '../../imags/possibility.png'

const Possibility = () => {
  return (
    <div className='possiblity_container'>
      <div className='ai_img'>
        <img src={Possibility_img} alt="possibility_img" className='img__ai' />
      </div>
      <div className='possibity_words_conatiner'>
        <p>Request Early Access to Get Started</p>
        <h1 className='gradient__text'>The possibilities are <br /> beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not <br /> thoughts all exercise blessing. Indulgence way everything joy <br /> alteration boisterous the attachment. Party we years to order <br /> allow asked of.</p>
        <h5 className='clyp'>Request Early Access to Get Started</h5>
      </div>
    </div>
  )
}

export default Possibility
