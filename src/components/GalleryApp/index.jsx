import React, { useState } from 'react'
import './index.css'


const imagesList = [
    {
      id: 0,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
      imageAltText: 'nature mountain with pond',
      thumbnailAltText: 'nature mountain with pond thumbnail',
    },
    {
      id: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
      imageAltText: 'nature sunset',
      thumbnailAltText: 'nature sunset thumbnail',
    },
    {
      id: 2,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
      imageAltText: 'nature mountain with ocean',
      thumbnailAltText: 'nature mountain with ocean thumbnail',
    },
    {
      id: 3,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
      imageAltText: 'nature mountain with forest',
      thumbnailAltText: 'nature mountain with forest thumbnail',
    },
    {
      id: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
      imageAltText: 'nature leaves',
      thumbnailAltText: 'nature leaves thumbnail',
    },
    {
      id: 5,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
      imageAltText: 'nature tree',
      thumbnailAltText: 'nature tree thumbnail',
    },
    {
      id: 6,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
      imageAltText: 'nature waterfall',
      thumbnailAltText: 'nature waterfall thumbnail',
    },
    {
      id: 7,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
      imageAltText: 'nature river',
      thumbnailAltText: 'nature river thumbnail',
    },
  ]

const GalleryApp = () => {
    const [activeImage,setActiveImage] = useState(imagesList[0])

    const getThumbnailId = (id) =>{
        setActiveImage(imagesList[id])
    }

  return (
    <div className='gallery-app-container'>
        <div className='gallery-sub-container'>
        <div className='gallery-image-display'>
            <img src={activeImage.imageUrl} alt={activeImage.imageAltText} className='display-image' />
        </div>
        <h4 className='nature-text'>Nature Photography</h4>
        <p className='photographer-name'>Nature Photography by Bhanu</p>
        <ul className='thumbnails-list-container'>
            {imagesList.map(image =>(
                
                <li key={image.id} className="thumbnail-image">
                    <button className='thumabnail-button' id={image.id} onClick={()=>getThumbnailId(image.id)}>
                        <img src={image.thumbnailUrl} alt={image.thumbnailAltText} className={image.id === activeImage.id ? "thumbnail active":'thumbnail'}/>  
                    </button>
                </li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default GalleryApp