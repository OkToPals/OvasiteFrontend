'use client'

import { register_url } from '@/api_utils'
import axios_instance from '@/axiosInstance'
import React, { useState } from 'react'

const TestSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('SUPER_ADMIN')
    const [loading, setLoading] = useState(false)

    const RegisterUser = async() => {
        setLoading(true)
        try {
            const response = await axios_instance.post(register_url, {
            email: email,
            password: password,
            // role: role
            })
            console.log(response);
            setLoading(false)
            
        } catch (error) {
    
            console.log(error);
            setLoading(false)
        }
    }

  return (
    <div className='mx-auto w-[90%] md:w-[500px] mt-10 shadow-md border p-8 flex flex-col'>
        <h1 className='text-center'>Signup</h1>
        <input type="email" className='border mt-4 p-2' placeholder='email' onChange={(e) => setEmail(e.target.value.trim())}/>
        <input type="password" className='border mt-4 p-2' placeholder='password' onChange={(e) => setPassword(e.target.value.trim())}/>
        <button className='mt-4 rounded-sm bg-orange-600 text-white p-2 w-32' onClick={RegisterUser}>{loading ? "Loading..." : "Register"}</button>
    </div>
  )
}

export default TestSignup