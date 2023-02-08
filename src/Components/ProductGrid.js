import React from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContext'

const ProductGrid = () => {
    const { isLoading, products, isError } = useProductContext();
    return (
        <>
            {isError ? <p>no internet connectivity</p> : isLoading ? <p>data Laoding</p> : products.map((curElm, index) => {
                return (
                    <div className='p-5' >
                        <div className='flex'>
                            <img className='h-36 w-40 ' src={curElm.image} alt="no item"></img>
                            <p>{curElm.description.slice(0, 150)}</p>
                            <p>{curElm.price}</p>
                        </div>
                        <Link to={`/Singleproduct/${curElm.id}`} className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>View Details</Link>

                    </div >
                )
            })
            }
        </>
    );
}

export default ProductGrid;
