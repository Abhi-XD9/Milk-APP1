import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './Authcontext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import ModalComponent from './ModalComponent';
import { useForm } from 'react-hook-form';

export default function Login({ onLoginSuccess }) {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [invalid, setInvalid] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const { mobile, password } = data;

        if (mobile === '1234567890' && password === '123') {
            login();
            if (onLoginSuccess) {
                onLoginSuccess();
            }
            navigate('/');
        } else {
            setInvalid(true);
            setTimeout(() => {
                setInvalid(false);
            }, 3000);
        }
    };

    return (
        <div id='login' className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div id='log-cont' className='shadow-lg rounded-lg p-8 w-96'>
                <h1 id='reg-heading' className='text-3xl font-bold text-center mb-6'>MILK HUB</h1>
                <h6 className='font-semibold text-center mb-4'>Welcome Back</h6>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className='mb-4 flex flex-col'>
                        <Form.Label className='text-sm font-medium'>Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Your Mobile Number."
                            {...register("mobile", {
                                required: "Mobile number is required",
                                minLength: {
                                    value: 10,
                                    message: "Mobile number must be exactly 10 digits"
                                },
                                maxLength: {
                                    value: 10,
                                    message: "Mobile number must be exactly 10 digits"
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Mobile number must contain only digits"
                                }
                            })}
                            className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.mobile ? 'border-red-500' : ''}`}
                        />
                        {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Label className='text-sm font-medium'>Password</Form.Label>
                        <div className="relative">
                            <Form.Control
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                                className={`border w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                            />
                            <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash className="text-gray-600" /> : <FaEye className="text-gray-600" />}
                            </span>
                        </div>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </Form.Group>

                    <div className="flex flex-col items-center">
                        <Button id='reg-btn' className='w-full mt-2 p-1 rounded-lg bg-blue-600 text-white hover:bg-blue-500' type="submit">
                            Login
                        </Button>
                        <div className='flex justify-between w-full'>
                            <p className='mt-4 text-sm text-gray-900'>
                                New user?
                                <span
                                    className='text-blue-500 cursor-pointer hover:underline'
                                    onClick={() => navigate('/register')}
                                >
                                    Register here.
                                </span>
                            </p>
                            <p onClick={() => navigate('/resetpass')} className='mt-4 cursor-pointer hover:underline text-sm text-gray-900'>Forgot Password?</p>
                        </div>
                    </div>
                </Form>

                <ModalComponent className='h-[300px]'  showTrigger={invalid}>
                    <img src="/Images/invalid-cred.gif" className=' rounded-lg'  alt="" />
                </ModalComponent>
            </div>
        </div>
    );
}
