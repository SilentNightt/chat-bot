import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

const home = () => {
  return (
    <div className='formBackground'>
      <div className='container'>
          <Sidebar />
          <Chat />
      </div>
    </div>
  )
}

export default home