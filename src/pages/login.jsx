import React, { useState } from 'react';
import { account } from '../services/appwriteConfig';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await account.createSession(email, password);
            console.log('User logged in successfully:', response);
            // Handle successful login (e.g., redirect to dashboard)
        } catch (error) {
            console.error('Failed to log in:', error);
            // Handle error (e.g., display error message)
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
