import React, { useState } from 'react'

import { TiTick } from 'react-icons/ti'
import CartTotalToggle from './CartTotalToggle'
import { NavLink } from "react-router-dom";
import { useCartContext } from '../Context/CartContext';

const AddToCart = ({ product }) => {
    const { addtocart } = useCartContext();
    const { id, colors, stock } = product;
    const [color, setcolor] = useState(null);
    const [amount, setamount] = useState(1);
    const setDecerese = () => {
        amount > 1 ? setamount(amount - 1) : setamount(1)
    }
    const setincrese = () => {
        amount < stock ? setamount(amount + 1) : setamount(stock);
    }
    //  console.log(amount)

    //    const { id: alice, name, price, company, colors, description, image } = singleProduct;
    return (
        <>
            <ul className='flex'>
                {!colors ? "loading" : colors.map((curElem, index) => {

                    return (
                        <li key={index} onClick={() => { setcolor(curElem) }} className='rounded-full  h-5 aspect-square mx-2 cursor-pointer' style={{ backgroundColor: curElem }} >{color === curElem ? <TiTick className='p-1 text-2xl text-green-800' /> : null}</li>
                    )
                })}</ul>
            <CartTotalToggle amount={amount} setDecerese={setDecerese} setincrese={setincrese} />
            <NavLink to="/cart" > <button className='p-2 bg-blue-900 text-white' onClick={() => addtocart(product, amount, id, color)}>Add to cart</button></NavLink>
        </>
    )
}

export default AddToCart
