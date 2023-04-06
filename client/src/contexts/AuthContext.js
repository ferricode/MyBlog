import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/');
        } catch (err) {
            console.log('Login Error');
        }

    };


    const onRegisterSubmit = async (values) => {

        const { repeatPassword, ...registerData } = values;

        if (repeatPassword !== registerData.password) {
            console.log('Pass is not matching');
            return;
            //TODO: Add form-validations
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/');
        } catch (error) {
            console.log('Register Error');
        }
    };

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    };
    const contextValues = {
        onLoginSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        userName: auth.userName,
        isAuthenticated: !!auth.accessToken,
        onRegisterSubmit,
        onLogout

    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};