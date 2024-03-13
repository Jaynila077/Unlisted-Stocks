"use client";

import React, { createContext ,  useReducer, ReactNode, use, useEffect } from "react";

interface AuthState {
    user: any;
}

interface AuthAction {
    type: string;
    payload: any;
}

interface AuthContextType extends AuthState {
    dispatch: React.Dispatch<AuthAction>;
}

const initialState: AuthState = {
    user: null
};

export const AuthContext = createContext<AuthContextType>({
    ...initialState,
    dispatch: () => {}
});

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch(action.type){ 
        case 'LOGIN':
            return {
                user: action.payload
            };
        case 'LOGOUT':
            return {
                user: null
            };
        default:
            return state;
    }
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({children}: AuthContextProviderProps) => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            dispatch({ type: 'LOGIN', payload: JSON.parse(user) });
        }
    }, []);

    console.log(state);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    );
}
