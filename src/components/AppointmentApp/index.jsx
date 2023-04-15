import React, { useState } from 'react'
import {v4} from 'uuid'
import './index.css'


const AppointmentsApp = () => {
    const [appointmentLists,setAppointmentData] = useState({title:'',date:''})
    const [appointmentData,setAppointmentDataArray] = useState([])
    const [activeButton,setActiveButton] = useState(false)

//     const  getDateData = (event) =>{
//         setAppointmentData({...appointmentLists, date:event.target.value})
//    }

//    const getTitleData = (event) =>{
//         setAppointmentData({...appointmentLists, title:event.target.value})
//    }


   const getInputData = (event) =>{
    setAppointmentData({...appointmentLists, [event.target.name]:event.target.value})
   }

    let {title,date} = appointmentLists
    const getAppointmentsData = () =>{
        setAppointmentDataArray([...appointmentData,{title,date,id:v4(),isLiked:false}])
        setAppointmentData({title:'',date:''})
        
    }

    const toggleStarButton = (id) =>{
        setAppointmentDataArray(prevData => prevData.map(each =>{
            
            if (each.id === id){
                return {...each,isLiked:! each.isLiked}
            }
            return each
        }) )
    }


    const getStarredCards = () =>{
        setActiveButton(!activeButton)
    }

    const getFilteredAppointmentsList = () =>{
        if (activeButton){
            return appointmentData.filter(each =>each.isLiked === true)
        }
        return appointmentData
    }

    const filteredAppointmentsList = getFilteredAppointmentsList()

  return (
    <div className='appointments-app-container'>
        <div className='appointment-form-container'>
            <div className='appoint-top'>
            <div className='appointment-form' >
                <h1>Add Appointments</h1>
                <p>{activeButton}</p>
                <h3 className='appoint-text'>Title</h3> <br />
                <input type="text" className='user-input-comment' name='title' value={appointmentLists.title} onChange={getInputData}/>
                <h3 >Date</h3> <br />
                <input type="date" className='user-input-comment' name="date" value={appointmentLists.date} onChange={getInputData}/> <br />
                <button type='button' className='appointment-add-button' onClick={() =>getAppointmentsData()}>Add</button>
            </div>
            <div className='appointment-image'>
               <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt="appointment" className='appoint-image'/>
            </div>
            </div>
            <hr />
            <div className='appointment-cards-container'>
                <div className='head-stared'>
                    <h2>Appointmrnts</h2>
                    <button type='button' className={`${activeButton ? "active starred-button":"starred-button"}`} onClick={() =>getStarredCards()}>Starred</button>
                </div>
                <ul className='appoint-cards-list'>
                    {filteredAppointmentsList.map(each =>(
                        <li className='each-appoint' key={each.id}>
                        <div>
                            <h2>{each?.title}</h2>
                            <button onClick={() =>toggleStarButton(each.id)}>
                                <img src={each.isLiked ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png":"https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"} alt="star" />
                            </button>
                        </div>
                        <p>Date: {each.date}</p>
                    </li>

                    ))}
                </ul>

            </div>
        </div>
    </div>
  )
}

export default AppointmentsApp