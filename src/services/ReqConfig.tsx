import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface AuthConfig {
    headers: { Authorization: string };
}

//Resposta genérica da API
export interface BaseResponse {
    tempoResposta: number;
    sucesso: boolean;
    mensagem: string;
    nomeObjeto: string;
}

export interface GenericResponse<T> extends BaseResponse {
    resultado: T;
}

export const API: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const authConfig = (token: string): AxiosRequestConfig => ({
    headers: { Authorization: `Bearer ${token}` },
});

