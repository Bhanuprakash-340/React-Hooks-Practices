import './index.css'
export const Card = (props) =>{
    const {cardDetails} = props 
    const {title,description,imgUrl,className} = cardDetails 
    // console.log(id)
    return(
        <li className={`${className}-tech tech-card`}>
           <h2>{title}</h2>
           <p>{description}</p>
           <div className='tech-image'>
            <img src={imgUrl} alt={title} />
           </div>
        </li>
    )
}