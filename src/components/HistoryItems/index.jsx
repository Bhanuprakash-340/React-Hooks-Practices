import React from 'react'
import './index.css'


const HistoryItems = (props) => {
    const {historyDetails,getHistoryDelId} = props 
    const {id,timeAccessed,logoUrl,title,domainUrl} = historyDetails

    const getHistoryDeleteid = () =>{
        getHistoryDelId(id)
    }
     
  return (
    <li className='history-list-items'>
        <div className='date-app-container'>
            <p className='history-date'>{timeAccessed}</p>
            <div className='logo-name-url-container'>
                <img src={logoUrl} alt={title} className="app-logo" />
                <p className='app-title'>{title}</p>
                <p className='app-url'>{domainUrl}</p>
            </div>
        </div>
        <button className='history-delete-icon-container' onClick={getHistoryDeleteid}>
            <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" className='history-delete-icon'/>
        </button>
    </li>
  )
}

export default HistoryItems

