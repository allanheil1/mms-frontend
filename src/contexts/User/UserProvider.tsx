import { ReactNode, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoggedUserInfo, UserContext } from '@/contexts/User/UserContext';
import { ThemeContext } from '../Theme/ThemeContext';

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
    const { openSnackbar } = useContext(ThemeContext);
    const navigate = useNavigate();
    
    function logout() {
        localStorage.removeItem('token');
        navigate('/');
        openSnackbar('success', 'Você foi deslogado')
    }

    return (
        <UserContext.Provider
            value={{
                userInfo,
                setUserInfo,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
}