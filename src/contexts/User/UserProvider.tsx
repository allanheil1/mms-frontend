import { ReactNode, useState } from 'react';
import { LoggedUserInfo, UserContext } from '@/contexts/User/UserContext';

interface UserProviderProps {
    children: ReactNode;
}

export default function UserProvider({ children }: UserProviderProps) {
    const [userInfo, setUserInfo] = useState<LoggedUserInfo>({
        TenantId: '',
        UsuarioId: '',
        UsuarioEmail: '',
        UsuarioNome: '',
        DataExpiracao: '',
        IdiomaPadrao: ''
    });
    const [token, setToken] = useState<string>('');
    
    function logout() {
        setToken('');
        localStorage.removeItem('token');
    }

    return (
        <UserContext.Provider
            value={{
                userInfo,
                setUserInfo,
                token,
                setToken,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
}