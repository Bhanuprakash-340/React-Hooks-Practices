import React, { useState } from 'react'
import {v4} from 'uuid'
import './index.css'


const MoneyManager = () => {

    const [getFormData, setFormData] = useState({title:'',amount:'',type:'Income'})
    const [moneyArray , setMoneyArray] = useState([])


    const changeHandler = (event) =>{
        setFormData({...getFormData,[event.target.name]:event.target.value})
    }

    let {title,amount,type} = getFormData
    const getMoneyFormData = (event) =>{
        event.preventDefault()
        setMoneyArray([...moneyArray,{title,amount:parseInt(amount),type,id:v4()}])
        setFormData({title:'',amount:'',type:'Income'})
    }

    const deleteMoneyItem = (id) =>{
        const filteredArray = moneyArray.filter(each =>each.id !== id)
        setMoneyArray(filteredArray)
    }

    
    const getUserBalance = () =>{
        let userTotalBalance = 0
        moneyArray.forEach(each =>{
            if (each.type === "Income"){
                 userTotalBalance += each.amount
            }
        })

        return userTotalBalance
    }

    const getUserExpenses = () =>{
        let expensesMoney = 0 
        moneyArray.forEach(each =>{
            if (each.type === "Expenses"){
                expensesMoney += each.amount
            }
        })

        return  expensesMoney
    }

    const yourBalance = getUserBalance()
    const yourExpenses = getUserExpenses()

    

  return (
    <div className='money-manager-app-container'>
        <div className='money-app-block-container'>
                <div className='money-app-banner'>
                    <h3>Hi Bhanu</h3>
                    <p>Welcome back to your <span>Money Manager</span></p>
                </div>
               <ul className='money-diaplay-container'>
                <li className='money-card yellow'>
                    <div>
                        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balance" className='money-icon' />
                    </div>
                    <div>
                        <p>Your Balance</p>
                        <h4>RS {yourBalance-yourExpenses}</h4>
                    </div>
                </li>
                <li className='money-card sky'>
                <div>
                        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" alt="income" className='money-icon'/>
                    </div>
                    <div>
                        <p>Your Income</p>
                        <h4>RS {yourBalance}</h4>
                    </div>
                </li>
                <li className='money-card violet'>
                <div>
                        <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" alt="expenses" className='money-icon'/>
                    </div>
                    <div>
                        <p>Your Expenses</p>
                        <h4>Rs {yourExpenses}</h4>
                    </div>
                </li>
               </ul>
               <div className='transaction-history-container'>
                <div className='transaction-container'>
                    <form className='transaction-form' onSubmit={getMoneyFormData}>
                        <h3 className='add-tran-heading'>Add Transaction</h3>
                        <label htmlFor="title" className='money-label'>Title</label><br/>
                        <input type="text" name='title' id='title' className='money-input'placeholder='Title' onChange={changeHandler} value={getFormData.title}/><br/>
                        <label htmlFor="amount" className='money-label'>Amount</label><br/>
                        <input type="number" name='amount' id='amount' className='money-input' placeholder='Amount' onChange={changeHandler} value={getFormData.amount}/><br/>
                        <label htmlFor="type" className='money-label'>Type</label><br/>

                        <select name="type"  className='money-input' value={getFormData.type} onChange={changeHandler}>
                            <option value="Income" >Income</option>
                            <option value="Expenses">Expenses</option>
                        </select><br/>

                        <button type='submit' className='add-tran-button'>Add</button>
                    </form>
                </div>
                <div className='history-container'>
                    <div className='history'>
                        <h3>History</h3>
                        <div className='history-table-container '>
                            <ul className='history-heading-container need'>
                                <li className='history-headings'>Title</li>
                                <li className='history-headings'>Amount</li>
                                <li className='history-headings'>Type</li>
                            </ul>
                            <ul className='history-heading-container-results'>
                                {moneyArray.map(eachTransaction=>(
                                    <li key={eachTransaction.id} className='money-list-items'>
                                        <div className='history-headings'>{eachTransaction.title}</div>
                                        <div className='history-headings'>{eachTransaction.amount}</div>
                                        <div className='history-headings'>{eachTransaction.type}</div>
                                        <button className='delete-icon' type='button' onClick={()=>deleteMoneyItem(eachTransaction.id)}>
                                            <img src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" alt="delete" className='money-delete-icon'/>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
               </div>
        </div>
    </div>
  )
}

export default MoneyManager