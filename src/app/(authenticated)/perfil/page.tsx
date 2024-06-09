import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import PerfilComponent from "@/components/perfil/perfilComponente";

export default async function Page() {

  return (
    <>
      <Navbar />
      <PerfilComponent />
      <Footer />
    </>
  );
}