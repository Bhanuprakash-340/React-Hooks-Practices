import React, { useState } from 'react'
import './index.css'

const reviewsList = [
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
      username: 'Wade Warren',
      companyName: 'Rang',
      description:
        'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
    },
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
      username: 'Adrian Williams',
      companyName: 'WheelO',
      description:
        'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
    },
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
      username: 'Sherry Johnson',
      companyName: 'MedX',
      description:
        'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
    },
    {
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
      username: 'Ronald Jones',
      companyName: 'Infinos Tech',
      description:
        'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
    },
  ]

const Reviews = () => {
    const [reviews,setReviews] = useState(0)

    const reviewData = reviewsList[reviews]

    const clickRightArrow = () =>{
        if (reviews < reviewsList.length -1){
            setReviews(prevCount => prevCount+1)
            // console.log(reviews)
        }
    }

    const clickLeftArrow = () =>{
        if (reviews > 0){
            setReviews(prevCount => prevCount -1)
        }
    }


  return (
    <div className='reviews-app-container'>
        <h2>Reviews</h2>
        <div className='reviews-container'>
            <button className='arrow-button' type='button' onClick={()=>clickLeftArrow()}><img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt="left arrow"/></button>
            <div className='review-content'>
                <img src={reviewData.imgUrl} alt="Wade Warren" />
                <p>{reviewData.username}</p>
                <p>{reviewData.companyName}</p>
                <p className='review-description'>{reviewData.description}</p>
            </div>
            <button className='arrow-button' type='button' onClick={()=>clickRightArrow()}><img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt="right arrow"/></button>
        </div>
    </div>
  )
}

export default Reviews