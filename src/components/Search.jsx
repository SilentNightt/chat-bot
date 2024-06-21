import React from 'react'
import Tiger from '../pictures/tiger-jpg.jpg'

const Search = () => {
  return (
    <div>
      <div className="search">
        <div className="searchForm">
           <input placeholder='search the name' type='text'/>
        </div>
        <div className="userChat">
            <img src={Tiger} alt=''/>
            <div className="userChatInfo">
              <span>Vadim</span>
            </div>
        </div>
       
        
      </div>
    </div>
    
  )
}

export default Search