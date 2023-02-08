import React from 'react'
import { Link } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContext'

const ProductList = () => {

    const { isLoading, products, isError } = useProductContext();
    return (
        <div >

            <div className="grid grid-cols-1 md:grid-cols-3" >
                {isError ? <p>no internet connectivity</p> : !products ? <p>data Laoding</p> : products.map((curElm, index) => {
                    return (
                        <>
                            < div className=' bg-white m-10 max-w-sm shadow-lg shadow-gray-400  ' key={index}>

                                <img className='h-[220px] w-96 ' src={curElm.image} alt='no card_image' />
                                <div className='p-6'>
                                    <h1 className='text-2xl font-semibold'>{curElm.name}</h1>
                                    <Link to={`/Singleproduct/${curElm.id}`}  className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>View Details</Link>
                                </div>
                            </ div></>)
                })}</div >


            <div className='flex justify-center '>
                <button disabled={false} className='bg-black text-white p-2  mx-auto   flex-initial'>&larr; Prev</button>
                <button disabled={false} className='border-5 p-2 bg-black mx-auto text-white border-black flex-grow-0'>Next &rarr;</button>
            </div>
        </div >
    )
}

export default ProductList
