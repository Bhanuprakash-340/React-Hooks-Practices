import React, { useState } from 'react'
import './index.css'

const SpeedoMeter = () => {
    const [speed , setSpeed] = useState(0)

    const applyAccelerate = () =>{
        if (speed >= 0){
            setSpeed(prevSpeed=>prevSpeed+10)
        }
        if (speed === 200){
            setSpeed(200)
        }
    }

    const applyBrake = () =>{
        if (speed <= 200){
            setSpeed(prevSpeed=>prevSpeed-10)
        }
        if (speed === 0){
            setSpeed(0)
        }
    }


  return (
    <div className='speedo-meter-main-container'>
        <div className='speed-meter-container'>
            <h1 className='speed-head'>SPEEDOMETER</h1>
            <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speed meter" className='speed-meter-image'/>
            <h2 className='speed-display'>Speed is <span className='speed-count'>{speed}</span> mph</h2>
            <p className='speed-info'>min limit is 0mph, max limit is 200mph</p>
            <div className='speed-buttons-container'>
                <button className='acc-button' type='button' onClick={()=>applyAccelerate()}>Accelerate</button>
                <button className='brakes-button' type='button' onClick={()=>applyBrake()}>Apply Brakes</button>
            </div>
        </div>
    </div>
  )
}

export default SpeedoMeter