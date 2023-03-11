import React from 'react'
import './NavBar.css'
import logo from '../../imags/logo.svg'
import { useState } from 'react'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='gpt3_navbar'>
      <div className="nav_barLinks">
        <div className='nav_barlogo'>
          <img src={logo} alt="gpt3_logo" />
        </div>
        <div className='nav_links'>
          <p><a href="#home">Home</a></p>
          <p><a href="#gpt3">What is GPT?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#library">Library</a></p>
        </div>  
        
      </div>
      <div className='sign_part'>
          <p><a href="#sign">Sign In</a></p>
          <button type='button'>Sign up</button>
      </div>
      <div className='navbar__menu__mobile'>
      {toggle 
       ? <RiCloseLine color="#ffff" size={27} onClick={() => setToggle(false)}/> : <RiMenu3Line color="#ffff" size={27} onClick={() => setToggle(true)}
      />}
      </div>
      {toggle && (
        <div className='gpt3__mobile_menu scale-up-center'>
          <div className='gpt3__mobile__menu__links'>
              <p><a className='opensans' href="#home">Home</a></p>
              <p><a className='opensans' href="#gpt3">What is GPT?</a></p>
              <p><a className='opensans' href="#possibility">Open AI</a></p>
              <p><a className='opensans' href="#features">Case Studies</a></p>
              <p><a className='opensans' href="#library">Library</a></p>
          </div>
          <div className='gpt3_mobile__navbar_sign'>
            <p className='opensans'>Sign In</p>
            <button type="submit">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
