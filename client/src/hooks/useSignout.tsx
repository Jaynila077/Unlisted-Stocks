import { useAuth } from "./AuthContextHook";

export const useSignout = () => {
    const { dispatch } = useAuth();

    
    const logout = () => {

        localStorage.removeItem('user');

        dispatch({ type: "LOGOUT" , payload: null})
    };
    
    return { logout };
}