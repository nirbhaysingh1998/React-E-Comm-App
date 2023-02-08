import React, { useState, useEffect } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useCartContext } from '../Context/CartContext'



const Cart = () => {

    const { cart, DeleteItem } = useCartContext();
    const { id, name, color, amount } = cart;

    return (

        <div>
            <div className='grid grid-cols-7 p-5   '>
                <div className='col-start-2 font-bold divide-y-reverse'>
                    Image
                </div>
                <div className='divide-y font-bold'><p>price</p></div>
                <div className='divide-y font-bold'><p>Quantity</p></div>
                <div className='divide-y font-bold'><p>Subtotal</p></div>
                <div className='divide-y font-bold '><p>Action</p></div>
            </div>
            {
                !cart ? "no item in cart" : cart.map((curElem, index) => {
                    return (
                        <div className='grid grid-cols-7 p-5' key={index}>
                            <div className='col-start-2 p-2'>
                                <img src={curElem.image} alt="no_alt" className='h-16 aspect-auto' />
                            </div>
                            <div className='divide-y'><p>{curElem.price}</p></div>
                            <div className='divide-y'><p>{curElem.amount}</p></div>
                            <div className='divide-y'><p>{curElem.price * curElem.amount}</p></div>
                            <div className=' '><button onClick={() => DeleteItem(curElem.id)}><RiDeleteBin6Line /></button></div>

                        </div>)
                })
            }


        </div >
    )
}

export default Cart
