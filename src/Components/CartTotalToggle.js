import React from 'react'

const CartTotalToggle = ({ amount, setDecerese, setincrese }) => {
    return (
        <div>
            <div className='flex'>
                <button className='b-xl p-2 text-size-xl' onClick={() => setDecerese()}>-</button>
                <p className='p-2'>{amount}</p>
                <button className='' onClick={() => setincrese()}>+</button>
            </div>
        </div>
    )
}

export default CartTotalToggle
