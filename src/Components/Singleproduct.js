import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../Context/ProductContext'
import PageNavigation from './PageNavigation';
import { FaShippingFast } from 'react-icons/fa'
import AddToCart from './AddToCart';

const Singleproduct = () => {

    const url = 'https://api.pujakaitem.com/api/products';
    const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext();
    const { id: alice, name, price, company, colors, description, image = [{ url: "" }] } = singleProduct;
    const [Image, setImage] = useState(image[0].url);

    const { id } = useParams();
    useEffect(() => {
        // setImage(singleProduct.image[1].url)
        setImage(image[0].url)
        // console.log(image[0].url)
        getSingleProduct(`${url}?id=${id}`);
    }, []);

    return (
        <>
            < PageNavigation title={name} />
            <div className='mt-2'>
                <div className='md:grid md:grid-cols-2'>
                    <div className='flex flex-row' >
                        <ul className='' >
                            {!image ? <p>Laoding</p> : image.map((curElem, index) => {

                                return (
                                    <li key={index} onClick={() => { setImage(curElem.url) }}>
                                        <img src={curElem.url} alt='no_thumbnail' className='h-24 p-2 cursor-pointer aspect-square border-md' /></li>)
                            })}




                        </ul>
                        <div className=' p-2'><img src={Image} alt='' /></div>
                    </div>
                    <div className='pl-10 text-left'>
                        <h2 className='text-3xl'>{name}</h2>
                        <div >mrp</div>
                        <div >deal of the day</div>
                        <div className=' md:pr-36' >{description}</div>
                        <div className=''>
                            <div className='flex pt-3  '>
                                <div className='mx-2 '> <FaShippingFast className='text-6xl mx-2 bg-slate-200 rounded-full p-2 text-blue-800' /> free shipping</div>
                                <div className='mx-2'> <FaShippingFast className='text-6xl mx-2 bg-slate-200 rounded-full p-2 text-red-700' /> free shipping</div>
                                <div className='mx-2'> <FaShippingFast className='text-6xl mx-2 bg-slate-200 rounded-full p-2 text-pink-500' /> free shipping</div>
                                <div className='mx-2'> <FaShippingFast className='text-6xl mx-2 bg-slate-200 rounded-full p-2' /> free shipping</div>
                            </div>
                        </div>
                        <div className='divide-y'> </div>
                        <div className='divide-y'> id:{id}</div>
                        <div className='divide-y'> brand:{company}</div>
                        <div >
                            <AddToCart product={singleProduct} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Singleproduct
