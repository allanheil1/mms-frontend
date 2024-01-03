import { ReactNode, useState } from 'react';
import { UserContext } from '@/contexts/User/UserContext';

interface UserProviderProps {
    children: ReactNode;
}

export default function UserProvider({ children }: UserProviderProps) {
    const [token, setToken] = useState<string>('');
    //const [userInfo, setUserInfo] = useState({});
    
    function logout() {
        setToken('');
        localStorage.removeItem('token');
    }

    return (
        <UserContext.Provider
            value={{
                token,
                setToken,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
}