import React, { useState } from 'react'
import './index.css'

const initialTodosList = [
    {
      id: 1,
      title: 'Book the ticket for today evening',
    },
    {
      id: 2,
      title: 'Rent the movie for tomorrow movie night',
    },
    {
      id: 3,
      title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
      id: 4,
      title: 'Drop the parcel at Bloomingdale',
    },
    {
      id: 5,
      title: 'Order fruits on Big Basket',
    },
    {
      id: 6,
      title: 'Fix the production issue',
    },
    {
      id: 7,
      title: 'Confirm my slot for Saturday Night',
    },
    {
      id: 8,
      title: 'Get essentials for Sunday car wash',
    },
  ]

const SimpleTodos = () => {

    const [deleteTodoId,getDeleteTodoId] = useState(initialTodosList)

    const getButtonId = (id) =>{
        const filteredList = deleteTodoId.filter(todo => todo.id !== id)
        getDeleteTodoId(filteredList)
        console.log(filteredList)
    }

  return (
    <div className='todo-main-container'>
        <div className='todo-container'>
            <h1 className='todos-heading'>Simple Todo</h1>
            <ul className='todos-list-container'>
                {deleteTodoId.map(todo =>(
                    <li className='todo' key={todo.id}>
                        <p className='todo-text'>{todo.title}</p>
                        <button className='todo-delete-button' type='button' id={todo.id} onClick={() => getButtonId(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SimpleTodos