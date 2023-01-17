import React from 'react'
import './Header.css'
import logo from 'C:\\Users\\hp\\OneDrive\\Desktop\\PROJECTS\\Airbnb\\RENT\\rental-app\\src\\images\\Airbnb-logo.png'
function Header() {
  return (
    <div className='header'>
           <img className='header_icon' src={logo}  alt='logo'/>
           <div className='header_center'>
                <input type='text'></input>
           </div>

    </div> 
  )
}

export default Header
