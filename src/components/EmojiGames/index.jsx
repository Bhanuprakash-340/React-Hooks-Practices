import React, { useState } from 'react'
import './index.css'

const emojisList = [
    {
      id: 0,
      emojiName: 'Face with stuck out tongue',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
    },
    {
      id: 1,
      emojiName: 'Face with head bandage',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
    },
    {
      id: 2,
      emojiName: 'Face with hugs',
      emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
    },
    {
      id: 3,
      emojiName: 'Face with laughing',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
    },
    {
      id: 4,
      emojiName: 'Laughing face with hand in front of mouth',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
    },
    {
      id: 5,
      emojiName: 'Face with mask',
      emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
    },
    {
      id: 6,
      emojiName: 'Face with silence',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
    },
    {
      id: 7,
      emojiName: 'Face with stuck out tongue and winked eye',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
    },
    {
      id: 8,
      emojiName: 'Grinning face with sweat',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
    },
    {
      id: 9,
      emojiName: 'Smiling face with heart eyes',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
    },
    {
      id: 10,
      emojiName: 'Grinning face',
      emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
    },
    {
      id: 11,
      emojiName: 'Smiling face with star eyes',
      emojiUrl:
        'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
    },
  ]

const EmojiGames = () => {
    const [randomEmoji,setRandomEmoji] = useState(emojisList)
    const [isGameInProgress,toggleGameProgress] = useState(true)
    const [isInclude,setIsInclude] = useState([])

    const getIsIncludedOrNot = (id) =>{
      setIsInclude(prevState => [...prevState,id])
      const checkNum = isInclude.includes(id)
      if (checkNum){
        toggleGameProgress(!isGameInProgress)
      }
    }



    const getRandomImage = (id) =>{
        const isIncluded = getIsIncludedOrNot(id)
        const randomNum = emojisList.sort(() =>Math.random() - 0.5)
        setRandomEmoji([...randomNum])
    }


  return (
    <div className='emoji-game-app-container'>

        <nav className='emoji-nav'>
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" alt="emoji logo" className='emoji-logo' />
            </div>
            <div className='emoji-score'>
                <p>Score: {isInclude.length}</p>
                <p>Top score : 0</p>
            </div>
        </nav>

        {isGameInProgress ? (
            <ul className='emoji-items-container'>
            {randomEmoji.map(emoji =>(
                <li key={emoji.id} className='each-emoji'>
                    <button className='emoji-button' onClick={() =>getRandomImage(emoji.id)}>
                        <img src={emoji.emojiUrl} alt={emoji.emojiName} className='emoji'/>
                    </button>
                </li>
            ))}
        </ul>
        ):(
            <div className='emoji-score-card'>
            <h1>You Loose</h1>
            <p>Score</p>
            <h2>01/12</h2>
            <button>Play Again</button>
            <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" alt="lose-game" className='lose-game-emoji'/>
        </div>
        )}
    </div>
  )
}

export default EmojiGames