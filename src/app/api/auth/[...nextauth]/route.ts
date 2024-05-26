import { constApiRoute } from "@/lib/routes/apiRoutes";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const url_api = constApiRoute.login ?? "URL Inexistente";

const handler = NextAuth({
    pages: {
        signIn: "/",
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            credentials: {
                cpf: { label: "Cpf", type: "text" },
                senha: { label: "Senha", type: "password" }
            },
            async authorize(credentials, req) {
                
                if(!credentials?.cpf || !credentials.senha){
                    throw new Error("Por favor Insira seu CPF e Senha para continuar");
                }

                const res = await fetch(url_api, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })

                if (res.status === 401) {
                    throw new Error('Credenciais inválidas');
                  }

                const user = await res.json()

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user, session }) {
          // Persist the OAuth access_token and or the user id to the token right after signin
          console.log("JWT CALLBACK: ", {token, user, session});
          
        //   if (user) {
        //     token.id = user.id
        //   }
          return token
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            console.log("JWT CALLBACK: ", {token, user, session});
            return session
          }
      },

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    }
});

export { handler as GET, handler as POST };
