import { ApiService } from "./apiService";
import { ILoginPayload, SignInResponse, SignUpFormInterface, SignUpResponse } from "../@types/apis/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService extends ApiService {
    public async login(payload: ILoginPayload): Promise<SignInResponse> {
        const cpf = payload.cpf.replace(/\D/g, '');
    
        try {
            console.log("Enviando requisição de login com CPF:", cpf);
    
            const response = await this.post<SignInResponse, ILoginPayload>(`login`, { cpf, senha: payload.senha });
    
            console.log("Resposta da API:", response);
    
            if (response.token) {
                await AsyncStorage.setItem('authToken', response.token); 
            }
    
            return response;
        } catch (error) {
            console.error("Erro ao fazer login:", error.response ? error.response.data : error.message);
            throw new Error('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
        }
    }
    
    
    public async register(payload: SignUpFormInterface): Promise<SignUpResponse> {
        const formattedPayload = {
            ...payload,
            cpf: payload.cpf.replace(/\D/g, '')  // Formata o CPF
        };
        return this.post<SignUpResponse, SignUpFormInterface>(`atendente`, formattedPayload);
    }

    // Método para fazer logout e remover o token
    public async logout(): Promise<void> {
        await AsyncStorage.removeItem('authToken'); // Remove o token do AsyncStorage
    }
}

export const authService = new AuthService();
