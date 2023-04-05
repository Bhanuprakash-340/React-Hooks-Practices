import React, { useState } from 'react'
import './index.css'

const countryAndCapitalsList = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland',
    },
  ]
  

const CapitalsApp = () => {
    const [capital,setCapital] = useState(countryAndCapitalsList[0])


    const getUserSelection = (event) =>{
        // console.log(event.target.value)
        const updatedItems = countryAndCapitalsList.find(eachCountry =>eachCountry.capitalDisplayText === event.target.value)
        setCapital(updatedItems)
        // console.log(updatedItems)
    }


  return (
    <div className='capitals-app-container'>
        <div className='capitals-block'>
            <h2 className='capital-heading'>Countries and Capitals</h2>
                <select name="" className='select-bar' onChange={getUserSelection}>
                    {countryAndCapitalsList.map(capital =>(
                        <option className='capital-options' value={capital.capitalDisplayText} key={capital.id}>{capital.capitalDisplayText}</option>
                    ))}
                </select>
                <span> is capital of which country?</span>
                <h1>{capital.country}</h1>
        </div>
    </div>
  )
}

export default CapitalsApp