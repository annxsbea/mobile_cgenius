import { AtendenteResponse, AtendenteRequest, AtendenteUpdate } from "../@types";
import { ApiService } from "./apiService";

export class AtendenteService extends ApiService {
    
    async getAllAtendentes(): Promise<AtendenteResponse[]> {
        return this.get<AtendenteResponse[]>('atendente');
    }

    async getAtendenteById(id: number): Promise<AtendenteResponse> {
        return this.get<AtendenteResponse>(`atendente/${id}`);
    }

    async getAtendenteByCpf(cpf: string): Promise<AtendenteResponse> {
        return this.get<AtendenteResponse>(`atendente/cpf/${cpf}`);
    }

    async createAtendente(atendenteRequest: AtendenteRequest): Promise<AtendenteResponse> {
        return this.post<AtendenteResponse, AtendenteRequest>('atendente', atendenteRequest);
    }

    async updateAtendenteById(id: number, atendenteUpdate: AtendenteUpdate): Promise<AtendenteResponse> {
        return this.put<AtendenteResponse, AtendenteUpdate>(`atendente/${id}`, atendenteUpdate);
    }

    async updateAtendenteByCpf(cpf: string, atendenteUpdate: AtendenteUpdate): Promise<AtendenteResponse> {
        return this.put<AtendenteResponse, AtendenteUpdate>(`atendente/cpf/${cpf}`, atendenteUpdate);
    }

    async deleteAtendenteById(id: number): Promise<void> {
        return this.delete<void>(`atendente/${id}`);
    }

    async deleteAtendenteByCpf(cpf: string): Promise<void> {
        return this.delete<void>(`atendente/cpf/${cpf}`);
    }
}
