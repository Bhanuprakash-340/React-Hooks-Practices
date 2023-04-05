import React from 'react'
import './index.css'

export const Boxes = () => {
  return (
    <div className='boxes-main-container'>
        <h1>Boxes</h1>
        <div className='boxes-container'>
            <div className='small-box'>Small</div>
            <div className='medium-box'>Medium</div>
            <div className='large-box'>Large</div>
        </div>
    </div>
  )
}