import React, { useState, useRef, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ModalComponent from './ModalComponent';

export default function ForgotPasssword() {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [otpValues, setOtpValues] = useState('');
    const[forgot,setForgot] = useState(false)
   
    const { register, handleSubmit, watch, formState: { errors }, setValue, trigger } = useForm();
    const newPassword = watch('newPassword', '');

    useEffect(()=>{
        setForgot(true)
    },[])

    const handleOtpChange = (e) => {
        setOtpValues(e.target.value)
    };

    const onSubmit = (data) => {
        // Simulate password reset action
        console.log('Password reset data:', data);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            navigate('/login');
        }, 2500);
    };

    return (
        <div id='login' className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div id='log-cont' className='shadow-lg rounded-lg p-8 w-96'>
                <h1 id='reg-heading' className='text-3xl font-bold text-center mb-6'>MILK HUB</h1>
                <h6 className='font-semibold text-center mb-4'>Reset Password</h6>
                {!submitted ? (
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className='mb-4 flex flex-col'>
                            <Form.Label className='text-sm font-medium'>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter New Password"
                                {...register("newPassword", {
                                    required: "New password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/,
                                        message: "Password must contain an uppercase letter, a number, and a symbol"
                                    }
                                })}
                                className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.newPassword ? 'border-red-500' : ''}`}
                            />
                            {errors.newPassword && <p className="text-red-500 text-xs mt-1">{errors.newPassword.message}</p>}
                        </Form.Group>


                        <Form.Group className='mb-4 flex flex-col'>
                            <Form.Label className='text-sm font-medium'>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm New Password"
                                {...register("confirmPassword", {
                                    required: "Confirm password is required",
                                    validate: value =>
                                        value === newPassword || "Passwords do not match"
                                })}
                                className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                        </Form.Group>

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
                        <Form.Group className='mb-4 flex flex-col'>
                            <Form.Label className='text-sm font-medium'>OTP</Form.Label>
                            <Form.Control
                                type="text"
                                maxLength={4}
                                onChange={handleOtpChange}
                                className={`border border-gray-300 rounded-md p-2 text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.otp ? 'border-red-500' : ''}`}
                            />
                            {errors.otp && <p className="text-red-500 text-xs mt-1">{errors.otp.message}</p>}
                        </Form.Group>

                        <div className="flex flex-col items-center">
                            <Button id='reg-btn' className='w-full mt-2 p-1 rounded-lg bg-blue-600 text-white hover:bg-blue-500' type="submit">
                                Change Password
                            </Button>
                            <p onClick={() => navigate('/login')} className='mt-4 cursor-pointer hover:underline text-sm text-gray-900 text-center'>
                                Back to Login
                            </p>
                        </div>
                    </Form>
                ) : (
                    
                    <ModalComponent showTrigger={setSubmitted}>
                        <img src="/Images/forgot.gif" className='w-full rounded-lg' alt="" />
                    </ModalComponent>
                )}
            </div>
            <ModalComponent showTrigger={forgot}>
                <img src="Images/forgot-home.gif" className='w-full' alt="" />
            </ModalComponent>
        </div>
    );
}
