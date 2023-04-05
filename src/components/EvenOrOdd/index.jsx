import React, { useState } from 'react'
import './index.css'


const EvenOrOdd = () => {
    const [randomNums,setRandomNum] = useState(0)
   
    const getRandomNum = () => {
        const randomNum = Math.ceil(Math.random()*100)
        // console.log(randomNum)
        setRandomNum(prevNum => prevNum+randomNum)
    }
    const isEvenOrOdd = randomNums % 2 === 0 ? 'Even' : 'odd'
    
  return (
    <div className='even-odd-main-container'>
        <h1 className='even-or-odd-count-display'> Count {randomNums}</h1>
        <h2 className='even-or-odd-text-display'>Count is {isEvenOrOdd}</h2>
        <button type='button' className='random-inc-button' onClick={() =>getRandomNum()}>Increment</button>
        <p className='even-odd-info-text'>*Increased by random number between 0 to 100</p>
    </div>
  )
}

export default EvenOrOdd