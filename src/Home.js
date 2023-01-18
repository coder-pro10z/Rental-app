import React from 'react'
import './Home.css'
import Banner from './Banner.js'

function Home() {
  return (
    <div>
        <div className='home'>
            <h1>Home Component</h1>
            <Banner/>
        </div>
    </div>
  )
}

export default Home
