import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (curElem) => {
    const { id, name, image, price, category } = curElem;
    return (
        <NavLink to={`/Singleproduct/${id}`}>
            <div className="  bg-white p-4 rounded-md " >
                <img
                    className=""
                    src={image}
                    alt="toogle"
                />
                <span className="text-left float-left">{name}</span>
                <span className="text-right float-right">{price}</span>
            </div>
        </NavLink >
    )
}

export default Product
