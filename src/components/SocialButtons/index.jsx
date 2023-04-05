import React from 'react'
import './index.css'


export const SocialButtons = () => {
  return (
    <div className='social-buttons-container'>
       <h1>Social Buttons</h1>
       <div className='buttons-container'>
            <button className='button like'>Like</button>
            <button className='button comment'>Comment</button>
            <button className='button share'>Share</button>
       </div>
    </div>
  )
}
