export interface ListClientsResponse  {
    nome_cliente: string;
    id: number;
    cpf_cliente: string;
    genero: string; 
    cep: string;
    telefone: string;
    email: string;
    dt_nascimento: string;
    perfil_cliente: string;


}
export interface ClientUpdateRequest {
    nome?: string;
    cpf?: string;
  
}

export interface ListEspecificacaoResponse {
    length: number;
    id: number;
    tipoCartaoCredito: string;
    gastoMensal: string; 
    rendaMensal: string; 
    viajaFrequentemente: number | null; 
    interesses: string;
    profissao: string;
    dependentes: number | null; 
    cliente: ListClientsResponse | null; 
}

export interface EspecificacaoUpdateRequest {
    tipoCartaoCredito?: string;
    gastoMensal?: string; 
    rendaMensal?: string; 
    viajaFrequentemente?: number | null; 
    interesses?: string;
    profissao?: string;
    dependentes?: number | null; 
    cliente?: ListClientsResponse | null; 
}



