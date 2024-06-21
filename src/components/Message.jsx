import React from 'react'
import Tiger from '../pictures/tiger-jpg.jpg'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="message-info">
        <img src={Tiger} alt=''/>
        <span>recently</span>
      </div>
      <div className="meaasge-content">
        <p>Hellow, how are u?</p>
        <img src={Tiger} alt=''/>
      </div>
    </div>
  )
}

export default Message