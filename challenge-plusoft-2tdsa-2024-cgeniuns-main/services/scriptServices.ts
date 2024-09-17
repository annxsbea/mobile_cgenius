import { ListScriptsResponse, ScriptUpdateRequest } from "../@types";
import { ApiService } from "./apiService";

class ScriptService extends ApiService {

    public async mostrarListaScripts(): Promise<ListScriptsResponse[]> {
        try {
            const response = await this.get<ListScriptsResponse[]>('script');
            return response;
        } catch (error) {
            console.error('Erro ao mostrar lista de scripts:', error);
            throw error;
        }
    }
    
    public async getScriptById(id: number): Promise<ListScriptsResponse> {
        try {
            const response = await this.get<ListScriptsResponse>(`script/${id}`);
            return response;
        } catch (error) {
            console.error(`Erro ao buscar script pelo ID ${id}:`, error);
            throw error;
        }
    }

    public async createScript(script: ScriptUpdateRequest): Promise<ListScriptsResponse> {
        try {
            const response = await this.post<ListScriptsResponse, ScriptUpdateRequest>('script', script);
            return response;
        } catch (error) {
            console.error('Erro ao criar script:', error);
            throw error;
        }
    }

    public async updateScript(id: number, script: ScriptUpdateRequest): Promise<ListScriptsResponse> {
        try {
            const response = await this.put<ListScriptsResponse, ScriptUpdateRequest>(`script/${id}`, script);
            return response;
        } catch (error) {
            console.error(`Erro ao atualizar script pelo ID ${id}:`, error);
            throw error;
        }
    }

    public async deleteScript(id: number): Promise<void> {
        try {
            await this.delete<void>(`script/${id}`);
        } catch (error) {
            console.error(`Erro ao deletar script pelo ID ${id}:`, error);
            throw error;
        }
    }
}

export const scriptService = new ScriptService();
