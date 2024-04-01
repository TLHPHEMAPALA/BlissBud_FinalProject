import React from 'react';
import DashboardImage from './../../Assests/Dashboard.png';
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
export default function Signup() {

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const register=async()=>{
        await createUserWithEmailAndPassword(auth, email, password).then(res=>{
            console.log('register')
        }).catch(error=>{
            console.log('error')
        })
    }
    return (
        <div className='flex items-center justify-center '>
            <div className='px-8 py-8 bg-white border-2 rounded-3xl'>
            <h1 className='mb-3 text-5xl font-semibold'>HI BLISSBUD </h1>
            <p className='mb-6 text-lg font-medium text-gray-500'>Please enter your details.</p>
            <div>
                <label className='mb-2 text-lg font-medium'>First Name</label>
                <input
                    
                    className='w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                    placeholder='Enter Your First Name' />
            </div>
            <div>
                <label className='mb-2 text-lg font-medium'>Email</label>
                <input
                
                onChange={(e)=>setEmail(e.target.value)}
                    className='w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                    placeholder='Enter Your email'
                    type='email' />
            </div>
            <div className="mt-4">
                <label className='mb-2 text-lg font-medium'>Enter Password</label>
                <input
                onChange={(e)=>setPassword(e.target.value)}
                    className='w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                    placeholder='Enter Your Password'
                    type="password"
                />
            </div>
            <div className="mt-4">
                <label className='mb-2 text-lg font-medium'>Confirm Your Password</label>
                <input
                    className='w-full p-3 mt-1 bg-transparent border-2 border-gray-100 rounded-xl'
                    placeholder='Confirm Your Password'
                    type="password"
                />
            </div>
            <div>
<button onClick={()=>{register()}}>Register</button>
                </div>
            <div className='flex items-center justify-between mt-4'>
                <div>
                    <input
                        type="checkbox"
                        id='checkbox_remember' />
                    <label className="ml-2 font-medium text-violet-500" htmlFor="checkbox_remember">Remember Password</label>
                </div>
                <button className='text-base font-medium text-violet-500'>Forgot password</button>
            </div>
            <div className='flex items-center justify-center mt-4'>
                <p className='mr-2 text-base font-medium'>Do You Have an account?</p>
                <Link to="/">
                <button className='text-base font-medium text-violet-500'>Sign In </button>
                </Link>
                 
            </div>
            </div>
            <div className="hidden md:w-1/2 md:block"> 
                <img src={DashboardImage} alt="Dashboard" /> 
            </div>
        </div>
    );
}
