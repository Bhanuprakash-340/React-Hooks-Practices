import React, { useState } from 'react'
import './index.css'

const RandomNumGenerator = () => {
    const [randomNum,setRandomNum] = useState(0)
  return (
    <div className='random-num-main-container'>
        <div className='random-card'>
            <h2 className='random-text'>
                Random Numbers
            </h2>
            <p className='random-des'>
                Generate a random number in the range of 0 to 100
            </p>
            <button className='ran-generate-button' type='button' onClick={() =>setRandomNum(Math.ceil(Math.random()*100))}>
                Generate
            </button>
            <h1 className='random-num'>
                {randomNum}
            </h1>
        </div>
    </div>
  )
}

export default RandomNumGenerator