import React from 'react'
import './Header.css'
import logo from './images/Airbnb-logo.png'
// import SearchIcon from "@material-ui/icons/Search";
import SearchIcon from '@material-ui/icons/Search';
// import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className='header'>
           <img className='header_icon' src={logo}  alt='logo'/>
           <div className='header_center'>
  
                <input type='text'></input>
                <SearchIcon/>
           </div>

    </div> 
  )
}

export default Header
