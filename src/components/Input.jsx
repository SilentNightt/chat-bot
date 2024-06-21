import React from 'react'
import Screap from '../pictures/screap.png'

const Input = () => {
  return (
    <div className='input-i'>
      <input type = 'text' placeholder='Type some text'/>
      <div className="sent-item">
        <input  style = {{display:'none'}} type='file' id = 'file'/>
        <label htmlFor='file'>
          <img src={Screap} alt=''/>
        </label>
        <button className='send-button'>Send</button>
      </div>
    </div>
  )
}

export default Input