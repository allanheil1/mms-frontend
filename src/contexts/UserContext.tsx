import { Dispatch, createContext, SetStateAction } from "react";

interface UserContextProps{
    token: string,
    setToken: Dispatch<SetStateAction<string>>;
    logout: () => void;
}

export const UserContext = createContext<UserContextProps>({
    token: '',
    setToken: () => {},
    logout: () => {}
});