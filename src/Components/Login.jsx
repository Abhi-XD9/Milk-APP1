import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Authcontext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === 'abc@gmail.com' && password === '123') {
            login();
            navigate('/');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <div id='login' className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white shadow-lg rounded-lg p-8 w-96'>
                <h1 className='text-3xl font-bold text-center mb-6'>MILK HUB</h1>
                <h2 className='text-xl font-semibold text-center mb-4'>Welcome Back</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className='mb-4 flex flex-col'>
                        <Form.Label className='text-sm font-medium'>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email" 
                            placeholder="Enter email" 
                            required 
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label className='text-sm font-medium'>Password</Form.Label>
                        <div className="relative">
                            <Form.Control 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                placeholder="Password" 
                                required 
                                className="border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <span 
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
                            </span>
                        </div>
                    </Form.Group>

                    <div className="flex flex-col items-center">
                        <Button className='w-full mt-4 p-1 rounded-lg bg-blue-600 text-white hover:bg-blue-500' type="submit">
                            Login
                        </Button>
                        <p className='mt-4 text-sm text-gray-600'>
                            New user? 
                            <span 
                                className='text-blue-500 cursor-pointer hover:underline' 
                                onClick={() => navigate('/register')}
                            >
                                Register here.
                            </span>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    );
}