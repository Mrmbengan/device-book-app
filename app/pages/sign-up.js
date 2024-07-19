"use client";

import { useState } from 'react';
import { registerUser } from '../utils/api';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ username, password });
        } catch (error) {
            setMessage('Registration failed');
        }
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <SignUp user={user} setUser={setUser} handleSubmit={handleSubmit} message={message} />
        </div>
    );
};

export default SignUpPage;