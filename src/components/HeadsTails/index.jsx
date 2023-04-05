import React, { useState } from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

const HeadsTails = () => {
    const [imageUrl,setImageUrl] = useState(HEADS_IMG_URL)
    const [headsCount,setHeadsCount] = useState(0)
    const [TailsCount,setTailsCount] = useState(0)

    const getRandomNum = () =>{
        const randomNum = Math.floor(Math.random()*2)
        console.log(randomNum)
        if (randomNum === 0){
            setImageUrl(HEADS_IMG_URL)
            setHeadsCount(headsCount+1)
        }
        else{
            setImageUrl(TAILS_IMG_URL)
            setTailsCount(TailsCount+1)
        }

    }
  return (
    <div className='head-tail-app-container'>
        <div className='head-tail-block'>
            <h2>Coin Toss Game</h2>
            <p>Heads or Tails</p>
            <img src={imageUrl} alt="Heads" className='toss-image'/>
            <button className='toss-button' onClick={()=>getRandomNum()}>Toss Coin</button>
            <div className='toss-count'>
                <p>Total : {headsCount+TailsCount}</p>
                <p>Heads : {headsCount}</p>
                <p>Tails : {TailsCount}</p>
            </div>
        </div>
    </div>
  )
}

export default HeadsTails