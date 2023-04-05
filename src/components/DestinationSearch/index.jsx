import React, { useState } from 'react'
import { FcSearch } from "react-icons/fc";
import './index.css'

const destinationsList = [
    {
      id: 1,
      name: 'Melaka Mosque',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
    },
    {
      id: 2,
      name: 'Shrubland',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
    },
    {
      id: 3,
      name: 'New York',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
    },
    {
      id: 4,
      name: 'Escarpment',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
    },
    {
      id: 5,
      name: 'Westminster Abbey',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
    },
    {
      id: 6,
      name: 'South Downs National Park',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
    },
    {
      id: 7,
      name: 'National Historic Site',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
    },
    {
      id: 8,
      name: 'Tower Bridge',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
    },
    {
      id: 9,
      name: 'Arc Here',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
    },
    {
      id: 10,
      name: 'Steeple',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
    },
    {
      id: 11,
      name: 'Glaciokarst',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
    },
    {
      id: 12,
      name: 'Parco Nazionale delle Cinque Terre',
      imgUrl:
        'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
    },
  ]
  

const DestinationSearch = () => {
    const [userInput,setUserInput] = useState('')

    const getUserInput = (event) =>{
        setUserInput(event.target.value)
    }

    const filterSearchResult = destinationsList.filter(each => each.name.includes(userInput.toLowerCase()))
    
  return (
    <div className='destination-search-app-container'>
       <h1 className='destination-text'>Destination Search</h1>
       <div className='destinations-container'>

        <div className='search-bar-container'>
            <input type="search" className='search-bar' onChange={getUserInput}/>
            <button className='search-button'>
                <FcSearch/>
            </button>
        </div> 
        
            <ul className='places-container'>
                {filterSearchResult.map(eachDestination =>(
                    <li key={eachDestination.id} className="each-destination-li">
                        <div className='image-name-container'>
                            <img src={eachDestination.imgUrl} alt={eachDestination.name} className="destination-image"/>
                            <p className='destination-name'>{eachDestination.name}</p>
                        </div>
                    </li>
                ))}
            </ul>
       
       </div>
    </div>
  )
}

export default DestinationSearch