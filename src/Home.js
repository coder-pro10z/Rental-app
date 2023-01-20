import React from 'react'
import './Home.css'
import Banner from './Banner.js'
// import { Card } from '@material-ui/core'
import Card from './Card'
function Home() {
  return (
    <div>
        <div className='home'>
            {/* <h1>Home Component</h1> */}
            <Banner/>
            <div className='home_section'>
              <Card src="	https://a0.muscache.com/im/pictures/8244569a-779e-4f3f-a750-597438456480.jpg?im_w=720"
              title="Entire homes"
              description="Comfortable private places, with room for friends or family."/>

              <Card src="	https://a0.muscache.com/im/pictures/8244569a-779e-4f3f-a750-597438456480.jpg?im_w=720"
              title="Entire homes"
              description="Comfortable private places, with room for friends or family."/>


              <Card src="	https://a0.muscache.com/im/pictures/8244569a-779e-4f3f-a750-597438456480.jpg?im_w=720"
              title="Entire homes"
              description="Comfortable private places, with room for friends or family."/>

            </div>
            <div className='home_section'>
              <Card src="https://a0.muscache.com/im/pictures/5d63e39b-7a7a-4433-8340-24114231c39d.jpg?im_w=720"
              title="Flat with three Bedrooms"
              description="Comfortable private places, with room for friends or family."
              price="$200/night"/>

              <Card src="https://a0.muscache.com/im/pictures/5d63e39b-7a7a-4433-8340-24114231c39d.jpg?im_w=720"
              title="Penthouse in London"
              description="Comfortable private places, with room for friends or family."
              price="$150/night"/>


              <Card src="https://a0.muscache.com/im/pictures/5d63e39b-7a7a-4433-8340-24114231c39d.jpg?im_w=720"
              title="One Bedroom Apartment"
              description="Comfortable private places, with room for friends or family."
              price="$50/night"/>

            </div>
        </div>
    </div>
  )
}

export default Home
