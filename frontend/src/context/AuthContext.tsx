import { createContext, useContext, useEffect, useState } from 'react';
import { getToken, removeToken } from '../services/authStorage';


type AuthContextType = {
    isAuthenticated: boolean;
    loading: boolean;
    setIsAuthenticated: (value: boolean) => void;
    logout: () => Promise<void>;
};


const AuthContext = createContext<AuthContextType | null>(null);


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initAuth = async () => {
            const token = await getToken();
            setIsAuthenticated(!!token);
            setLoading(false);
        };
        initAuth();
    }, []);

    const logout = async () => {
        await removeToken();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, loading, setIsAuthenticated, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error('useAuth must be used inside AuthProvider');
    }
    return ctx;
}
