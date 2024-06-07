import { CurrentUser, UserResult } from "./current-user";

const LOCAL_STORAGE_KEY = 'auth:current-user';

export function readCurrentUser(): UserResult {
  if (typeof window === "undefined") return "nao-logado";

    const value = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (value === null) {
      return "nao-logado";
    }
  return decodeCurrentUser(value);
}

export function writeCurrentUser(user: UserResult): void {
  if (user === "nao-logado" || user === "carregando") {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return;
  }

  const encoded = encodeCurrentUser(user);
  localStorage.setItem(LOCAL_STORAGE_KEY, encoded);
}

function decodeCurrentUser(encoded: string): UserResult {
  try {
    const json = JSON.parse(encoded);
    const { nome, email, cpf, telefone, escolaridade } = json;

    if (
      typeof nome !== 'string' ||
      typeof email !== 'string' ||
      typeof cpf !== 'string' ||
      typeof telefone !== 'string' ||
      typeof escolaridade !== 'string'
    ) {
      return "nao-logado";
    }

    return { nome, email, cpf, telefone, escolaridade };
  } catch (err) {
    return "nao-logado"; // JSON inválido
  }
}

function encodeCurrentUser(user: CurrentUser): string {
  return JSON.stringify(user);
}