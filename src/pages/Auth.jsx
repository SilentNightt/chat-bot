import React from 'react'
import Logo from '../pictures/Logo.jpg'

const Auth = () => {
  return (
    <div className='formContainer'>
        <div className='formWallpaper'>
            <span className='logo'>Chat Bot</span>
            <span className='title'>Register</span>

            <form className='formHolders'>
                <input type='text' placeholder = "enter your name"/>
                <input type='email' placeholder = "enter your emale"/>
                <input type='password' placeholder = "enter your password"/>
                <input type='file' style = {{display: 'none'} } id='file'/>
                <label  htmlFor='file'>
                    <img src={Logo}/>
                    <p>Choose your avatar</p>
                </label>
            </form>
            <button>
                Registrate
            </button>
            <p className='footer'>If you registreate. Log in</p>
        </div>
    </div>
  )
}

export default Auth