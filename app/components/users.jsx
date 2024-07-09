'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Server from '@/app/components/server'
const client = () => {
    console.log('client side')
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const asyncHandle = async () => { 
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.log(error)
            }
        }
        asyncHandle();
    },[])
    return (
        <div>
            <ul >
                {users.map((user,index) => (
                    <li key={index}>
                     <Link href={`/ /${user.id}`}>   {user.name}</Link>
                    </li>
                ))}
            </ul>

            <Server />  
        </div>
    )
}

export default client;
