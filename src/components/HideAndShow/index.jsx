import React, { useState } from 'react'
import './index.css'


const HideAndShow = () => {
    const [firstName,hideAndShowFirstName] = useState(true)
    const [secondName,hideAndShowSecondName] = useState(true)

    const hideAndShowFirstBox = firstName ? 'show' : 'hide'
    const hideAndShowSecondBox = secondName ? 'show' : 'hide'

  return (
    <div className='show-app-main-container'>
            <h1 className='show-text'>Show/Hide</h1>
            <div className='show-cards-container'>
                <div className='show-hide-buttons-container'>
                    <button className='show-hide-button' type="button" onClick={() =>hideAndShowFirstName(prevState =>!prevState)}>Show/Hide firstName</button>
                    <button className='show-hide-button' type='button' onClick={() =>hideAndShowSecondName(prevState =>!prevState)}>Show/Hide Second Name</button>
                </div>
                <div className='hide-display-container'>
                    <div className={`${hideAndShowFirstBox} show-hide-container`}  > Bhanu </div>
                    <div className={`${hideAndShowSecondBox} show-hide-container`}> Prakash </div>
                </div>
            </div>
    </div>
  )
}

export default HideAndShow