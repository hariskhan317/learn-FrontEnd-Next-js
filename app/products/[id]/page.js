'use client'
import React, { useEffect, useState } from 'react'

export default function page({ params }) {
    const [product, setProduct] = useState(null);
    const id = params.id;
    useEffect(() => {
        const getSingleProduct = async() => {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json(); 
            console.log(data)
            setProduct(data);
        }
        getSingleProduct();
    }, [])

 

    return (
        <div className='bg-white mx-auto w-1/2 px-16 py-10 mt-40 rounded shadow-xl'>
          {product ? (
            <div>
              <h2 className='text-xl font-medium'>{product.title}</h2>
              <p className='py-10 text-base'>{product.description}</p>
              <p className='text-base font-medium'>Price: ${product.price}</p>
                    <div className='space-x-3 mt-12'>{product.tags.map((tag) => (
                        <span className='text-base text-sm bg-gray-300 text-black px-4 py-1.5 rounded'>{tag}</span>
                    ))}</div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      );
}
