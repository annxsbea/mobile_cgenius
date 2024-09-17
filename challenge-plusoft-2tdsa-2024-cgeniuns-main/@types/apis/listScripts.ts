export interface ListScriptsResponse {
  id: number;
  id_plano: number;
  descricao_script: string;

 
}   

export interface ScriptUpdateRequest {
  descricao?: string;
  
}
