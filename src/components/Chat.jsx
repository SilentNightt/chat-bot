import React from 'react'
import Refresh from '../pictures/Refresh.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>Vadim</span>
        <div className="chatIcons">
            <img src={Refresh} alt=''/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat