import React, { useState } from 'react'
import './index.css'

const suggestionsList = [
    {id: 1, suggestion: 'Price of Ethereum'},
    {id: 2, suggestion: 'Oculus Quest 2 specs'},
    {id: 3, suggestion: 'Tesla Share Price'},
    {id: 4, suggestion: 'Price of Ethereum today'},
    {id: 5, suggestion: 'Latest trends in AI'},
    {id: 6, suggestion: 'Latest trends in ML'},
  ]

const GoogleSuggestions = () => {
    const [searchInput,setSearchInput] = useState('')

    const getUserSearchGoogleInput = (event) =>{
        setSearchInput(event.target.value)
    }

    const getSuggestionId = (id,text) =>{
        setSearchInput(text)
    }

    const filteredData = suggestionsList.filter(suggestion => suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()))

  return (
    <div className='google-app-container'>
        <div className='google-image-container'>
            <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" alt="google logo" className='google-image'/>
        </div>
        <div className='google-input-suggestions-container'>
            <div className='input-search-google'>
                <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" alt="google search icon"  className='google-search-icon'/>
                <input type="search" className='google-search-bar' placeholder='Search Google' onChange={getUserSearchGoogleInput} value={searchInput}/>
            </div>
            <ul className='suggestions-list-container'>
                {filteredData.map(suggestion =>(
                    <li key={suggestion.id} className="suggestion-item">
                        <p className='suggestion'>{suggestion.suggestion}</p>
                        <button className='suggestion-copy-button' id={suggestion.id} onClick={() =>getSuggestionId(suggestion.id,suggestion.suggestion)}>
                            <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" alt="suggestion copy" className='suggestion-copy-icon' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default GoogleSuggestions