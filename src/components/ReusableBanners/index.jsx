import React from 'react'
import './index.css'

const bannerCardsList = [
    {
      id: 1,
      headerText: 'The Seasons Latest',
      description: 'Get the seasons all latest designs in a flick of your hand',
      className: 'card-1',
    },
    {
      id: 2,
      headerText: 'Our New Designs',
      description:
        'Get the designs developed by our in-house team all for yourself',
      className: 'card-2',
    },
    {
      id: 3,
      headerText: 'Insiders',
      description: 'Get the top class products for yourself with an extra off',
      className: 'card-3',
    },
  ]

export const ReusableBanners = () => {

  return (
    <div className='reusable-banner-container'>
        <ul className='reusable-cards-container'>
            {bannerCardsList.map(eachBanner =>(
                <li key={eachBanner.id} className="list-item">
                    <div className={`${eachBanner.className} banner`}>
                        <h2 className='header-text'>{eachBanner.headerText}</h2>
                        <p className='description'>{eachBanner.description}</p>
                        <button type='button' className='show-more-button'>show more</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
