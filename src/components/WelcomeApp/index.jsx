import React, { useState } from 'react'
import './index.css'


const WelcomeApp = () => {
    const [subscribe,setSubscribe] = useState(false)
    const checkSubscription = subscribe ? 'Subscribed' : 'Subscribe'


  return (
    <div className='welcome-app-container'>
       <h1 className='welcome-text'>Welcome</h1>
       <h4 className='welcome-text-2'>Thank You Happy Learning</h4>
       <button type='button' className='subscribe-button' onClick={() => setSubscribe(prevState => !prevState)}>{checkSubscription}</button>
    </div>
  )
}

export default WelcomeApp