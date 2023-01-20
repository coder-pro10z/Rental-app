import { Button } from '@material-ui/core'
import React from 'react'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage_info'>
        <p>
            62 stays - 26 December to 15 January - 2 guest
        </p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibilty</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More Filters</Button>
        <SearchResult 
        img="https://a0.muscache.com/im/pictures/8c4f3027-8339-4559-8992-7e6eb4a536a5.jpg?im_w=720"
        location="Sea Views"
        title="Bo Put, Thailand"
        description="description"
        star="4.5"
        price="₹31,780 night"
        total="₹71,760 total"
        />
        <SearchResult 
        img="https://a0.muscache.com/im/pictures/miso/Hosting-604706020372898045/original/2d2f7a32-70d9-4cf8-8f76-7a48b36fcffe.jpeg?im_w=720"
        location="Sea Views"
        title="Lonavla, India"
        description="description"
        star="4.3"
        price="₹31,780 night"
        total="₹71,760 total"
        />
      </div>

    </div>
  )
}

export default SearchPage
