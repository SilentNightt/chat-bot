import React from 'react'

const Registrate = () => {
  return (
    <div className='formContainer'>
    <div className='formWallpaper'>
        <span className='logo'>Chat Bot</span>
        <span className='title'>Register</span>
        <form className='formHolders'>
            <input type='email' placeholder = "enter your emale"/>
            <input type='password' placeholder = "enter your password"/>
        </form>
        <button>
            Sign in
        </button>
        <p className='footer'>If you don't have an accaunt. Registrate</p>
    </div>
    </div>
  )
}

export default Registrate