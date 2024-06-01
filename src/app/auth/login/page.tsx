import SubmitButton from '@/components/SubmitButton'
import React from 'react'

interface User {
    id: number,
    name: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string
}

const Login = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users: User[] = await res?.json();

  return (
    <>
        <h1 className='bg- text-3xl'>Hello world, This is a Login page</h1>
        {
            users?.map(user=> (
                <li key={user.id} >{user.name} {user?.address.city}</li>
            ))
        }

        <SubmitButton >Login</SubmitButton>
    </>
  )
}

export default Login