import { useState } from 'react';
import { useAuth } from './AuthContextHook';

export const useSignin = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { dispatch } = useAuth();
    const signin = async (name: string, password: string) => {
        setLoading(true);
        setError('');
        const response = await fetch('http://localhost:5000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, password })
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.message);
            setLoading(false);
        }
        if (response.ok) {
            console.log('User logged in successfully');
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
            setLoading(false);
        }
    };
    return { error, loading, signin };
}