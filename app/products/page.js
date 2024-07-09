'use client'
import React, { useEffect, useState } from 'react'
import Button from '@/app/components/button'

export default function () {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProductList = async() => {
            const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price');
            const data = await res.json();  
            setProducts(data.products);
        }
        getProductList();
        
    }, [])
 
  return (
    <div className='px-20'>
          {products.length > 0 && (<>
            {products.map(({id, title, price}) => (
                <div  key={id} className='bg-white px-20 py-10 mt-10 rounded shadow cursor-pointer'>
                    <h1 className='text-lg font-medium'>{title}</h1>    
                    <p className=''>Price {price}$</p>    
                    <Button id={id} />
                </div>
            ))}
          </>)}
    </div>
  )
}
