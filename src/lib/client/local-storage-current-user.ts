import { CurrentUser } from "./current-user";

const LOCAL_STORAGE_KEY = 'auth:current-user';

export function readCurrentUser(): CurrentUser | null {
  if (typeof window !== "undefined") {
    // browser code
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (value === null) {
      return null;
    }

  }
  return decodeCurrentUser(value);
}

export function writeCurrentUser(user: CurrentUser | null): void {
  if (user === null) {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    return;
  }

  const encoded = encodeCurrentUser(user);
  localStorage.setItem(LOCAL_STORAGE_KEY, encoded);
}

function decodeCurrentUser(encoded: string): CurrentUser | null {
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
      return null;
    }

    return { nome, email, cpf, telefone, escolaridade };
  } catch (err) {
    return null; // JSON inválido
  }
}

function encodeCurrentUser(user: CurrentUser): string {
  return JSON.stringify(user);
}