export interface AtendenteResponse {
    id: string;
    nome_atendente: string;
    cpf_atendente: string;
    setor: string;
    senha: string; // Remover se não for necessário armazenar a senha
    perfil_atendente: string;
    token: string; // Inclua se necessário
}
export interface AtendenteRequest {
    nome_atendente: string;
    cpf_atendente: string;
    setor: string;
    senha: string;
    perfil: string; 
}
export interface AtendenteUpdate {
    nome_atendente?: string;
    cpf_atendente?: string;
    setor?: string;
    senha?: string;
    perfil?: string; 
}
