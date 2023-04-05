import React, { useState } from 'react'
import './index.css'


const LettersCalculator = () => {
    const [lettersCount,setLettersCount] = useState(0)

    const getUserInput = (event) =>{
        const lengthOfNums = (event.target.value).length
        setLettersCount(lengthOfNums)
    }


  return (
    <div className='letters-cal-app'>
        <div className='letters-cal-block'>
            <div className='letters-input-block'>
                <h1 className='cal-head'>Calculate the letters you enter</h1>
                <label htmlFor="textInput" className='cal-label'>Enter the phrases</label><br />
                <input type="text" id='textInput' className='cal-letter-input-bar' onChange={getUserInput}/>
                <div className='let-count'>
                    No.of Letters {lettersCount}
                </div>
            </div>
            <div className='letters-image'>
                <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="letters" className='letters-img' />
            </div>
        </div>
    </div>
  )
}

export default LettersCalculator