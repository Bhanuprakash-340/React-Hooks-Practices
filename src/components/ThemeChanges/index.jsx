import React, { useState } from 'react'
import './index.css'

const ThemeChanges = () => {
    const [theme, setTheme] = useState(true)
    const isDarkTheme = theme ? 'dark' : 'light'
    const buttonText = theme ? 'Light Mode' : 'Dark Mode'
  return (
    <div className='theme-app-container'>
        <div className={`${isDarkTheme} theme-container`}>
            <h1 className='theme-card-text'>Click to Change Mode</h1>
            <button type='button' className='theme-button' onClick={()=>setTheme(prevState => !prevState)}>{buttonText}</button>
        </div>
    </div>
  )
}

export default ThemeChanges