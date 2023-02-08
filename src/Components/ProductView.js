import React, { useState } from 'react'
import ProductList from './ProductList'
import ProductGrid from './ProductGrid'
import { BsFillGridFill, BsCardList } from 'react-icons/bs'
import { useProductContext } from '../Context/ProductContext'

const ProductView = () => {
    const { isLoading, products, isError, sorting } = useProductContext();
    const [view, setview] = useState('grid');
    return (
        <>
            <div className='grid grid-cols-4'>
                <div className='col-start-1 col-end-2 '>filter</div>
                <div className='flex p-4 space-x-2'>
                    <div className='text-2xl cursor-pointer p-0.5' onClick={() => { setview('grid') }}><BsFillGridFill /> </div>
                    <div className='text-3xl cursor-pointer' onClick={() => { setview('list') }}><BsCardList /> </div>
                </div>

                <div className='p-2' ><form action='#'><select name="sort" id="sort" onClick={sorting} className='float-right p-1 border-2 border-blue-900' >
                    <option value="#">select</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                    <option value="a-z">(A-Z)</option>
                    <option value="z-a">(Z-A)</option></select></form></div>
                {view === "list" ?
                    <div className='col-start-2 col-end-6 '><ProductGrid /></div>
                    :
                    <div className='col-start-2 col-end-6 '><ProductList /></div>
                }
            </div>
        </>

    )
}

export default ProductView
