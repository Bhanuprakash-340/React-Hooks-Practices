import React from 'react'
import './index.css'

const CongratsCards = () => {
  return (
    <div className='congrats-card-main-container'>
        <h1>Congratulations</h1>
        <div className='congrats-card-container'>
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" alt="profile" />
            </div>
            <h2>Bhanu Prakash</h2>
            <p>N.B.K.R Institute of Science and Technology</p>
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" alt="product" />
            </div>
        </div>
    </div>
  )
}

export default CongratsCards