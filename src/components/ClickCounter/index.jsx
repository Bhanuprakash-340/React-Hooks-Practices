import React, { useState } from 'react'
import './index.css'

const ClickCounter = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='click-counter-main-container'>
        <div className='click-counter'>
            <h1>The Button has been clicked <span className='count'>{count}</span> times</h1>
            <p>click the button to increase the count</p>
            <button type='button' className='click-count-button' onClick={() =>setCount(count+1)}>Click me</button>
        </div>
    </div>
  )
}

export default ClickCounter