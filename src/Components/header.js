import React from 'react'
import ImageSearch from './searchBox'
import "./style.css"
const Image = () => {
  return (
    <div className="container">
        <h1 className="body">React Photo Search</h1>
        <span><button className='bookmark' >Bookmark</button>
        </span>
        <ImageSearch/>
      </div>
  )
}

export default Image