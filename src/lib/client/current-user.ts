export type CurrentUser = {
  id: number
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  escolaridade: string;
};

export type UserResult = CurrentUser | "nao-logado" | "carregando";