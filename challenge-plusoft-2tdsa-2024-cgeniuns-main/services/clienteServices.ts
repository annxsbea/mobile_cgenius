import { ListClientsResponse, ClientUpdateRequest, ListEspecificacaoResponse, EspecificacaoUpdateRequest } from "../@types";
import { ApiService } from "./apiService";

class ClientService extends ApiService {
    pesquisarClientePorCPF(searchQuery: string) {
      throw new Error("Method not implemented.");
    }

    // Métodos existentes para clientes
    public async mostrarListaClientes(): Promise<ListClientsResponse[]> {
        try {
            const response = await this.get<ListClientsResponse[]>('cliente');
            return response;
        } catch (error) {
            console.error('Erro ao mostrar lista de clientes:', error);
            throw error;
        }
    }
    
    public async getClienteByCpf(cpf: string): Promise<ListClientsResponse> {
        try {
            cpf = cpf.replace(/\D/g, '');
            const response = await this.get<ListClientsResponse>(`cliente/cpf/${cpf}`);
            return response;
        } catch (error) {
            console.error(`Erro ao buscar cliente pelo CPF ${cpf}:`, error);
            throw error;
        }
    }
    
    public async updateCliente(cpf: string, updateData: ClientUpdateRequest): Promise<ListClientsResponse> {
        try {
            cpf = cpf.replace(/\D/g, '');
            const response = await this.put<ListClientsResponse, ClientUpdateRequest>(`cliente/cpf/${cpf}`, updateData);
            return response;
        } catch (error) {
            console.error(`Erro ao atualizar cliente pelo CPF ${cpf}:`, error);
            throw error;
        }
    }

    public async deleteCliente(cpf: string): Promise<void> {
        try {
            cpf = cpf.replace(/\D/g, '');
            await this.delete<void>(`cliente/cpf/${cpf}`);
        } catch (error) {
            console.error(`Erro ao deletar cliente pelo CPF ${cpf}:`, error);
            throw error;
        }
    }

    public async mostrarListaEspecificacoes(): Promise<ListEspecificacaoResponse[]> {
        try {
            const response = await this.get<ListEspecificacaoResponse[]>('especificacao');
            return response;
        } catch (error) {
            console.error('Erro ao mostrar lista de especificações:', error);
            throw error;
        }
    }

    public async getEspecificacaoById(id: number): Promise<ListEspecificacaoResponse[]> {
        try {
            const response = await this.get<ListEspecificacaoResponse[]>(`especificacao/${id}`);
            return response;
        } catch (error) {
            console.error('Erro ao obter especificações:', error);
            throw error;
        }
    }
    

    public async getEspecificacaoByCpf(cpf: string): Promise<ListEspecificacaoResponse> {
        try {
            cpf = cpf.replace(/\D/g, '');
            const response = await this.get<ListEspecificacaoResponse>(`especificacao/cpf/${cpf}`);
            return response;
        } catch (error) {
            console.error(`Erro ao buscar especificação pelo CPF ${cpf}:`, error);
            throw error;
        }
    }

    public async updateEspecificacao(id: number, updateData: EspecificacaoUpdateRequest): Promise<ListEspecificacaoResponse> {
        try {
            const response = await this.put<ListEspecificacaoResponse, EspecificacaoUpdateRequest>(`especificacao/${id}`, updateData);
            return response;
        } catch (error) {
            console.error(`Erro ao atualizar especificação pelo ID ${id}:`, error);
            throw error;
        }
    }

    public async deleteEspecificacao(id: number): Promise<void> {
        try {
            await this.delete<void>(`especificacao/${id}`);
        } catch (error) {
            console.error(`Erro ao deletar especificação pelo ID ${id}:`, error);
            throw error;
        }
    }
}

export const clientService = new ClientService();
