import React from "react";
import {Card} from '../Card'
import './index.css'

const cardsList = [
    {
      id: 1,
      title: 'Data Scientist',
      description:
        'Data scientists gather and analyze large sets of structured and unstructured data',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
      className: 'card-1',
    },
    {
      id: 2,
      title: 'IOT Developer',
      description:
        'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
      className: 'card-2',
    },
    {
      id: 3,
      title: 'VR Developer',
      description:
        'A VR developer creates completely new digital environments that people can see.',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
      className: 'card-3',
    },
    {
      id: 4,
      title: 'ML Engineer',
      description:
        'Machine learning engineers feed data into models defined by data scientists.',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
      className: 'card-4',
    },
  ]

export const TechnologyCards = () =>{

    return(
        <div className="technology-cards-container">
            <div>
                <h1 className="tech-heading">Technology Cards</h1>
                <p className="tech-para">Get trained by alumni of IIT's and top companies like Amazon,Microsoft,Intel,Nvdia,Qualcomn,etc.Learn directly from professionals involved in product Development</p>
            </div>
            <ul className="tech-items-container">
                {cardsList.map(card =>(
                    <Card cardDetails={card} key={card.id}/>
                ))}
            </ul>
        </div>
    )
}