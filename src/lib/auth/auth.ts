import { CurrentUser } from "../client/current-user";
import { Route } from "../routes";

type Credentials = {
  cpf: string;
  senha: string;
};

export type SignInResult = {
  kind: 'success';
  user: CurrentUser;
} | {
  kind: 'error';
  message: string;
};

export async function signInEscon(creds: Credentials): Promise<SignInResult> {
  try {
    const response = await fetch(Route.api.login, {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    if (!response.ok) {
      const message = await response.json();
      return { kind: 'error', message };
    }

    const data = await response.json();

    return { kind: 'success', user: data };

  } catch (err) {
    return { kind: 'error', message: 'Erro desconhecido.' };
  }
}