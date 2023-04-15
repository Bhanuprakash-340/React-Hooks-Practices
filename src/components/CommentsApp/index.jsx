import React, { useState } from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4} from 'uuid'
import './index.css'

const initialColors = [
    'amber',
    'blue',
    'orange',
    'emerald',
    'teal',
    'red',
    'light-blue',
]

const CommentsApp = () => {
    const [formData,setFormData] = useState({commenterName:'',comment:''})
    const [commentsData,setCommentsData] = useState([])
    
    const getFormData = (event) =>{
        event.preventDefault()
       let {comment,commenterName} = formData 
       setCommentsData([...commentsData,{comment,commenterName,id:v4(),isLiked:false,date:new Date(),initialClassNameIndex:Math.ceil(Math.random()*initialColors.length-1)}])
       setFormData({commenterName:'',comment:''})
       console.log("bhanu prakash")
    }

    const getCommenterName = (event) =>{
         setFormData({...formData, commenterName:event.target.value})
    }

    const getComment = (event) =>{
        setFormData({...formData, comment:event.target.value})
    }

    const deletedItem = (id) =>{
       const filteredArray  = commentsData.filter(each =>each.id !== id)
       setCommentsData(filteredArray)
    }


    const handleLikeIcon = (id) => {
        setCommentsData(prevData => prevData.map(each => {
            if (each.id === id) {
                return { ...each, isLiked: !each.isLiked };
            }
            return each;
        }));
    };

  return (
    <div className='comments-app-main-container'>
        <h1>Comments</h1>
        <div className='input-data-container'>
            <form className='inputs-container' onSubmit={getFormData}>
                <p>Say something about 4.0 Technologies</p>
                <input type="text" className='user-input-comment' value={formData.commenterName} onChange={getCommenterName}/>
                <textarea  cols="40" rows="10" className='comment-textarea'  value={formData.comment} onChange={getComment}></textarea>
                <button className='add-comment-button' type='submit'>Add Comment</button>
            </form>
            <div className='commnets-image'>
                <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments app" />
            </div>
        </div>
        <hr className='comment-hr-line'/>
        <div className='comments-count-container'>
            <div className='comment-count'>
                {commentsData.length}
            </div>
            <span>Comments</span>
        </div>
        <ul className='comments-container'>
            {commentsData.map(eachComment =>(
                <li className='each-comment-item' key={eachComment.id}>
                <div className='comment-block'>
                    <div className={`profile-block ${initialColors[eachComment.initialClassNameIndex]}`}>
                        {eachComment.commenterName ? eachComment.commenterName[0].toUpperCase():''}
                    </div>
                    <div className='name-comment-block'>
                            <p className='commenter-text'>{eachComment.commenterName} <span className='commented-time'>
                      {formatDistanceToNow(eachComment.date)} ago
                        </span>
                            </p>
                        <p className='commenter-text'>{eachComment.comment}</p>
                    </div>
                </div>
                <div className='like-delete-container'>
                    <button className='like-delete-button' onClick={()=>handleLikeIcon(eachComment.id)}>
                        <img src={eachComment.isLiked === true ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png":"https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"} alt="like" className='comment-icon'/>
                        {eachComment.isLiked === true ? (<p className='like'> Like </p>):(<p className='unlike'> UnLike </p>)}
                    </button>
                    <button className='like-delete-button'>
                        <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete" className='comment-icon' onClick={() =>deletedItem(eachComment.id)}/>
                    </button>
                </div>
                <hr className='comment-line'/>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default CommentsApp