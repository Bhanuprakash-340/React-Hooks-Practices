import React, { useState } from 'react'
import './index.css'


const CashWithdrawls  = () => {
    const [amount , setAmount] = useState(2000)
  return (
    <div className='withdraw-app-container'> 
        <div className='withdraw-display-card'>

            <div className='profile-container'>
                <div className='profile-text'>B</div>
                <h4 className='person-name'>BhanuPrakash</h4>
            </div>

            <div className='amount-container'>
                <h3 className='your-balance-text'>Your Balance</h3>
                <div>
                    <h1 className='amount'>{amount}</h1>
                    <p className='your-balance-text'>In Rupees</p>
                </div>
            </div>

            <div className='price-buttons-container'>
                <div>
                    <h2 className='your-balance-text'>Withdraw</h2>
                    <p className='your-balance-text'>Choose sum in Rupees</p>
                </div>
                <div className='price-buttons-block'>
                    <button type='button' className='price-buttons' onClick={() =>setAmount(prevAmount =>prevAmount- 50)}>50</button>
                    <button type='button' className='price-buttons' onClick={() =>setAmount(prevAmount =>prevAmount- 100)}>100</button>
                    <button type='button' className='price-buttons' onClick={() =>setAmount(prevAmount =>prevAmount- 200)}>200</button>
                    <button type='button' className='price-buttons' onClick={() =>setAmount(prevAmount =>prevAmount- 500)}>500</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CashWithdrawls 