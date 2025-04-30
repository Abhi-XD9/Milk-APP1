import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [apiError, setApiError] = useState(null);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/Register/', {
                fullname: data.fullname,
                email: data.email,
                phone_number: data.phone,
                password: data.password
            });
            console.log('Registration successful:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
            setApiError(error.response?.data?.message || 'Registration failed. Please try again.');
        }
    };

    return (
        <div id='reg' className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div id='log-cont' className='shadow-lg rounded-lg p-8 w-96'>
                <h1 id='reg-heading' className='text-3xl font-bold text-center mb-6'>MILK HUB.</h1>
                {apiError && <p className="text-red-500 text-sm text-center mb-4">{apiError}</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className='mb-3 flex flex-col'>
                        <Form.Label className='text-sm font-medium'>Full Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your full name" 
                            className={`border ${errors.fullname ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500`} 
                            {...register('fullname', { required: 'Full name is required' })} 
                        />
                        {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
                    </Form.Group>

                    <Form.Group className='mb-3 flex flex-col'>
                        <Form.Label className='text-sm font-medium'>Mobile Number</Form.Label>
                        <Form.Control 
                            type="tel" 
                            placeholder="Enter Phone Number" 
                            className={`border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`} 
                            {...register('phone', { 
                                required: 'Mobile number is required', 
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Mobile number must be 10 digits'
                                }
                            })} 
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </Form.Group>

                    <Form.Group className='mb-3 flex flex-col'>
                        <Form.Label className='text-sm font-medium'>Email address <span className='text-gray-500'>(Optional)</span></Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            className='border rounded-md p-2 border-gray-300' 
                            {...register('email')} 
                        />
                    </Form.Group>

                    <Form.Group className='mb-3 flex flex-col'>
                        <Form.Label className='text-sm font-medium'>Password</Form.Label>
                        <div className="relative">
                            <Form.Control 
                                type={showPassword ? 'text' : 'password'} 
                                placeholder="Password" 
                                className={`border w-full ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md p-2`} 
                                {...register('password', { 
                                    required: 'Password is required', 
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be at least 8 characters'
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: 'Password must include at least one uppercase letter, one number, and one special character'
                                    }
                                })} 
                            />
                            <span 
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
                            </span>
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </Form.Group>

                    <div className="flex flex-col items-center">
                        <Button className='w-full mt-3 p-1 rounded-lg  text-white' id='reg-btn' type="submit">
                            Register
                        </Button>
                        <p className='mt-2 text-sm text-gray-600'>
                            Already a user? 
                            <span 
                                className='text-blue-500 cursor-pointer hover:underline' 
                                onClick={() => navigate('/login')}
                            >
                                Login here.
                            </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationPage;
