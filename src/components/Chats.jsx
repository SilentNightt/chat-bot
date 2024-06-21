import React from 'react'
import Tiger from '../pictures/tiger-jpg.jpg'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={Tiger} alt=''/>
        <div className="userChatInfo">
          <span>Vadim</span>
          <p>Hellow</p>
        </div>
      </div>
    </div>
  )
}

export default Chats