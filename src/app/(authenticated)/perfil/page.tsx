import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import PerfilComponent from "@/components/perfil/perfilComponente";
import { CurrentUserContext } from "@/lib/client/current-user-context";
import { constRoutes } from "@/lib/routes/routes";
import { redirect } from "next/navigation";

export default async function Page() {

  if (!CurrentUserContext) {
    redirect(constRoutes.login)
  }

  return (
    <>
      <Navbar />
      <PerfilComponent />
      <Footer />
    </>
  );
}