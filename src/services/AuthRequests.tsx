import { API, GenericResponse } from '@/services/ReqConfig';
import { AxiosResponse } from 'axios';

export interface LoginBody {
    Login: string;
    Senha: string;
    Idioma: string;
}

export interface LoginResponse extends GenericResponse<{
    token: string;
    data_Expiracao: Date;
}> {}

export async function ReqLogin(body: LoginBody): Promise<AxiosResponse | null> {
    try {
        const response = await API.post('/Token/GerarToken', body);
        return response;
    } catch (error) {
        console.error('Error in login request:', error);
        return null;
    }
}