import React, { useState } from 'react'
import './index.css'


const FruitsCounter = () => {
  const [mangoCount,setMangoesCount] = useState(0)
  const [bananaCount, setBananaCount] = useState(0)

  return (
    <div className='fruits-main-container'>
       <div className='fruits-container'>
            <h1 className='fruits-count-text'>Bhanu ate <span className='fruit-count'>{mangoCount} </span>
             Mango and <span className='fruit-count'>{bananaCount}</span> Banana</h1>
            <div className='fruits-images-container'>
                <div className='fruit-and-button'>
                    <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png " alt="mango" className='fruit-images'/>
                    <button className='fruit-button' type='button' onClick={() =>setMangoesCount(mangoCount+1)}>Eat Mango</button>
                </div>
                <div className='fruit-and-button'>
                    <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana" className='fruit-images' />
                    <button className='fruit-button' type='button' onClick={() =>setBananaCount(bananaCount+1)}>Eat Banana</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default FruitsCounter