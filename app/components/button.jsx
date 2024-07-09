import React from 'react'
import { useRouter } from 'next/navigation'

export default function button({ id }) {
    const router = useRouter();
    const showCompleteProduct = (id) => {
        router.push(`/products/${id}`)
    }
    return (
        <div>
            <button className='bg-gray-900 text-white px-3 py-2 rounded mt-6' onClick={() => showCompleteProduct(id)}> Show Product</button>
        </div>
    )
}
