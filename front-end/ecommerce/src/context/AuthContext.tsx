import React, { createContext, useCallback } from 'react';

const AuthContext: any = createContext({});

const AuthProvider: React.FC = ({ children }) => {
    const signIn = useCallback(() => {
        console.log('logado');
    }, []);

    return (
        <AuthContext.Provider value={{ name: 'diego', signIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
