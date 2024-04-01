import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardImage from './../../Assests/Dashboard.png';
import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/questionarie');
            Swal.fire({
                title: "Login Successful",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                title: "Login Error",
                text:"",
                icon: "error",
                confirmButtonText: "OK"
            });
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 to-blue-200 md:flex-row">
            <div className="w-full max-w-md px-6 py-8 mx-auto bg-white rounded-lg shadow-lg md:w-1/2">
                <h1 className="mb-4 text-3xl font-semibold text-center text-gray-800">Welcome to BlissBud</h1>
                <p className="mb-8 text-lg text-center text-gray-600">Login to your account</p>
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full p-3 bg-gray-200 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            placeholder='Enter Your Email'
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full p-3 bg-gray-200 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            placeholder='Enter Your Password'
                        />
                    </div>
                </form>
                <div className='flex items-center justify-between mt-4'>
                    <div>
                        <input
                            type="checkbox"
                            id='checkbox_remember' />
                        <label htmlFor="checkbox_remember" className="ml-2 text-sm text-gray-700">Remember Password</label>
                    </div>
                    <button className='text-sm font-medium text-blue-600'>Forgot password</button>
                </div>
                <div className='mt-8'>
                    <button onClick={() => { login() }} className='w-full px-6 py-3 text-lg font-medium text-white transition duration-300 rounded-full shadow-md bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Login
                    </button>
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <p className='mr-2 text-base text-gray-700'>Don't have an account?</p>
                    <Link to="/signup">
                        <button className='text-base font-medium text-blue-600'>Sign Up</button>
                    </Link>
                </div>
            </div>
            <div className="hidden md:block md:w-1/2">
                <img src={DashboardImage} alt="Dashboard" className="object-cover w-full h-full" />
            </div>
        </div>
    );
}
