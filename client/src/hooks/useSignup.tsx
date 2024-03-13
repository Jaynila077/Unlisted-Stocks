import { useState } from "react";
import { useAuth } from "./AuthContextHook";

export const useSignup = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { dispatch } = useAuth();

    const signup = async(name: string, email: string, password: string) => {
        setLoading(true);
        setError('');

        const response = await fetch('http://localhost:5000/user/signup', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        
        const json = await response.json();

        if(!response.ok){
            setError(json.message);
            setLoading(false);
        }
        if(response.ok){

            console.log('User created successfully')

            localStorage.setItem('user', JSON.stringify(json));
            dispatch({type: 'LOGIN', payload: json});
            setLoading(false);
        }
    }

    return { error, loading, signup };
}