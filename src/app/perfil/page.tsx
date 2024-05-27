import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import PerfilComponent from "@/components/perfil/perfilComponente";
import { constRoutes } from "@/lib/routes/routes";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Page() {
   const session = await getServerSession()
// const {data: session, status, update} = useSession();

  if (!session) {
    redirect(constRoutes.login)
  }

  return (
    <>
      <Navbar />
      <p>DADOS PADROES:</p>
      <p>Name: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      <p>Image: {session.user?.image}</p>
      <PerfilComponent
        nome={session?.user?.name || undefined}
        cpf={session?.user?.email || undefined}
        email={session?.user?.email || undefined}
        escolaridade={session?.user?.email || undefined}
        telefone={session?.user?.image || undefined}
      />
      <Footer />
    </>
  );
}