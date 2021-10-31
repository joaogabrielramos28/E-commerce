import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';
import ToastFunction from '../utils/toast';

interface AuthState {
    token: string;
    user: object;
}

const AuthContext: any = createContext({});

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState | null>(() => {
        const token = localStorage.getItem('@E-commerce:token');
        const user = localStorage.getItem('@E-commerce:User');

        if (token && user) {
            return { token, user: JSON.parse(user) };
        }

        return null;
    });

    const signIn = useCallback(async ({ email, password }) => {
        try {
            const response = await api.post<AuthState>('/sessions', {
                email: email,
                password: password,
            });

            const { token, user } = response.data;

            localStorage.setItem('@E-commerce:token', token);
            localStorage.setItem('@E-commerce:User', JSON.stringify(user));

            setData({ token, user });
            ToastFunction('Login successful', 'success');
        } catch (err) {
            ToastFunction('Login Error', 'error');
        }
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@E-commerce:token');
        localStorage.removeItem('@E-commerce:User');

        setData(null);
    }, []);

    return (
        <AuthContext.Provider value={{ user: data?.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
