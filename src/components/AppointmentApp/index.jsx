import React, { useState } from 'react'
import './index.css'


const AppointmentsApp = () => {
    const [appointmentLists,setAppointmentList] = useState([{title:'',date:''}])

    const getUserTitle = (event) =>{
        setAppointmentList({...appointmentLists,title:event.target.value})
        // console.log(event.target.value)
    }

    const getappointmentDate = (event) =>{
        setAppointmentList({...appointmentLists,date:event.target.value})
        // console.log(event.target.value)
    }

    const getAppointmentData = () =>{
        console.log(appointmentLists)
    }

  return (
    <div className='appointments-app-container'>
        <div className='appointment-form-container'>
            <div className='appoint-top'>
            <form className='appointment-form' onSubmit={getAppointmentData}>
                <h1>Add Appointments</h1>
                <h3 className='appoint-text'>Title</h3> <br />
                <input type="text" className='user-input-comment' onChange={getUserTitle}/>
                <h3 >Date</h3> <br />
                <input type="date" className='user-input-comment' onChange={getappointmentDate}/> <br />
                <button type='submit' className='appointment-add-button'>Add</button>
            </form>
            <div className='appointment-image'>
               <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt="appointment" className='appoint-image'/>
            </div>
            </div>
            <hr />
            <div className='appointment-cards-container'>
                <div className='head-stared'>
                    <h2>Appointmrnts</h2>
                    <button>Stared</button>
                </div>
                <ul className='appoint-cards-list'>
                    <li className='each-appoint'>
                        <div>
                            <h2>Title</h2>
                            <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png" alt="star" />
                        </div>
                        <p>Date: 15th September,Tuesday</p>
                    </li>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default AppointmentsApp