import React from 'react'
import './index.css'
export const Notifications = () => {
  return (
    <div className='notifications-main-container'>
        <h1>Notifications</h1>
        <div className='notifications-container'>
            <div className='status-bar info'>
                <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" alt="info"  className='icon'/>
                <p>Information Message</p>
            </div>
            <div  className='status-bar success'>
                <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" alt="success"  className='icon'/>
                <p>Success Message</p>
            </div>
            <div  className='status-bar warning'>
                <img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" alt="warning"  className='icon'/>
                <p>Warning Message</p>
            </div>
            <div  className='status-bar danger'>
                <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" alt="Danger"  className='icon'/>
                <p>Danger Message</p>
            </div>
        </div>
    </div>
  )
}

