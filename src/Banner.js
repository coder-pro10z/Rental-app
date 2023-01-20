import React, { useState } from 'react'
import './Banner.css'
import Search from './Search.js'
import {useNavigate} from "react-router-dom"
function Banner() {
    const navigate=useNavigate();
    const [showSearch,setShowSearch]=useState(false)
  return (
    <div className='banner'>
        {showSearch && <Search/>}
        <div className='banner_search'>
            <button onClick={()=>setShowSearch(!showSearch)} className="banner_searchButton"variant="outlined">
              {showSearch?"Hide":"Search Dates"}
            </button>
        </div>

        <div className='banner_info'>
            <h1>Get out and Stretch your imagination!</h1>
            <h5>Plan a different kind of getaway to uncover the hideen gems near you.</h5>
            <button onClick={()=>navigate('/search')} variant='outlined'>Explore Nearby </button>
        </div> 

    </div>
  )
}

export default Banner
