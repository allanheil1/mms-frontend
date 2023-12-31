import { Dispatch, createContext, SetStateAction } from 'react';

export interface LoggedUserInfo{
    TenantId: string,
    UsuarioId: string,
    UsuarioEmail: string,
    UsuarioNome: string,
    DataExpiracao: string,
    IdiomaPadrao: string
}
interface UserContextProps{
    userInfo: LoggedUserInfo,
    setUserInfo: Dispatch<SetStateAction<LoggedUserInfo>>;
    logout: () => void;
}

export const UserContext = createContext<UserContextProps>({
    userInfo: {
        TenantId: '',
        UsuarioId: '',
        UsuarioEmail: '',
        UsuarioNome: '',
        DataExpiracao: '',
        IdiomaPadrao: ''
    },
    setUserInfo: () => {},
    logout: () => {}
});