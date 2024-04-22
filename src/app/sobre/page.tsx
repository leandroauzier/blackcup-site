import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import SocioCard from "@/components/sobre/socioCard";
import Tabs from "@/components/tabs";
import { Typography } from "@mui/material";

type SobreProps = {};

export default function Sobre({ }: SobreProps) {
    const content = (
        <section className="px-8 pt-6 dark:bg-black">
            <div className="container mx-auto w-2/3 text-justify">
                <Typography
                    variant="h2"
                    color="blueviolet"
                    className="my-4"
                >
                    O que é a Blackcup?
                </Typography>
                <Typography
                    variant="body1"
                    color="white"
                    className="pt-4 pb-8"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus corrupti, tempore impedit eveniet, optio magnam consectetur quas unde, repudiandae voluptate aperiam enim! Blanditiis et expedita temporibus dignissimos cupiditate. Excepturi!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, officia facere tempora repellat voluptate eos optio numquam explicabo delectus obcaecati omnis, provident soluta laudantium asperiores minus inventore. Facilis, incidunt nisi.
                </Typography>
                <Typography
                    variant="h2"
                    color="blueviolet"
                    className="my-4"
                >
                    Quem são os fundadores?
                </Typography>
                <Typography
                    variant="h5"
                    color={"GrayText"}
                >
                    Os Co-Fundadores da Blackcup: Uma Equipe de Talentos Diversificados
                </Typography>
                <Typography
                    variant="body1"
                    color="white"
                    className="pt-4 pb-8"
                >
                    A Blackcup, renomada empresa brasileira de desenvolvimento de jogos, foi fundada por quatro indivíduos excepcionais, cada um contribuindo com habilidades e experiências únicas para o sucesso da empresa.
                </Typography>

                <SocioCard
                    imgSource="/images/socios/leandro.jpg"
                    nome="Leandro"
                    titulo="O Mestre da Programação"
                    desc="Leandro, um dos co-fundadores da Blackcup, é um talentoso programador backend com formação em Ciência da Computação. Sua expertise em Unity, nível intermediário, o torna um recurso valioso para a equipe de desenvolvimento de jogos. Além disso, Leandro também é habilidoso em programação web, utilizando tecnologias como React, Next.js, PHP e Python para criar experiências interativas online."
                />
                <SocioCard
                    imgSource="/images/socios/leandro.jpg"
                    nome="Júlio"
                    titulo="O Cérebro Criativo"
                    desc="Julio é o designer de jogos da equipe, trazendo consigo uma formação em Psicologia que enriquece suas habilidades de game design. Sua criatividade e visão única ajudam a moldar os jogos da Blackcup, garantindo que sejam envolventes e emocionantes para os jogadores. Além disso, Julio também atua como programador júnior de games, contribuindo com sua paixão e conhecimento técnico para o desenvolvimento dos jogos."
                />
                <SocioCard
                    imgSource="/images/socios/leandro.jpg"
                    nome="Ramon"
                    titulo="O Veterano da Programação"
                    desc="Ramon é o membro mais experiente da equipe, com um histórico impressionante de projetos bem-sucedidos. Ele é especializado em programação backend e na criação da interface dos jogos, sendo capaz de lidar com códigos complexos de forma eficiente e eficaz. Sua vasta experiência e habilidades técnicas fazem dele um ativo inestimável para a equipe de desenvolvimento da Blackcup."
                />
                <SocioCard
                    imgSource="/images/socios/leandro.jpg"
                    nome="Paulo"
                    titulo="A Alma Jurídica"
                    desc="Como membro sócio da Blackcup e formado em Direito, Paulo desempenha um papel crucial no aspecto jurídico da empresa. Sua experiência e conhecimento jurídico garantem que a Blackcup opere de acordo com as leis e regulamentações aplicáveis, proporcionando uma base sólida para o crescimento e sucesso contínuo da empresa."
                />
                <Typography
                    variant="body1"
                    color="white"
                    className="pt-4 pb-8"
                >
                    Juntos, Leandro, Julio, Ramon e Paulo formam uma equipe diversificada e talentosa que impulsiona a inovação e a excelência na indústria de desenvolvimento de jogos. Seus diferentes conjuntos de habilidades e experiências se complementam, permitindo que a Blackcup crie jogos de alta qualidade que cativam e emocionam jogadores em todo o mundo.
                </Typography>

                <Tabs 
                opcao1="Missão"
                opcao2="Valores"
                opcao3="Visão"
                className="my-4"
                />

                <Typography
                    variant="h5"
                    color={"GrayText"}
                >
                    Visão da Empresa Blackcup
                </Typography>

                <Typography
                    variant="body1"
                    color="white"
                    className="pt-4 pb-8"
                >
                    A Blackcup tem a visão de se tornar uma referência no desenvolvimento de jogos no Brasil, reconhecida pela qualidade e originalidade de seus produtos. Buscamos criar experiências inovadoras que cativem e envolvam os jogadores, contribuindo para o crescimento e reconhecimento da indústria de jogos nacional e internacionalmente.
                </Typography>

                <Typography
                    variant="h5"
                    color={"GrayText"}
                >
                    Valores da Empresa Blackcup
                </Typography>

                <Typography
                    variant="body1"
                    color="white"
                    className="pt-4 pb-8"
                >
                    Os valores da Blackcup são fundamentais para nossa cultura e guiam nossas ações e decisões diárias. Valorizamos a criatividade e a originalidade, buscando constantemente inovar em nossos jogos. Acreditamos na excelência, sempre buscando aprimorar nossos processos e produtos. Valorizamos a diversidade e o respeito, criando um ambiente inclusivo e acolhedor para todos os colaboradores e parceiros. A transparência e a ética são essenciais em todas as nossas relações, buscando sempre agir com integridade e responsabilidade.
                </Typography>
                <Typography
                    variant="h5"
                    color={"GrayText"}
                >
                    Missão da Empresa Blackcup
                </Typography>

                <Typography
                    variant="body1"
                    color="white"
                    className="pt-4 pb-8"
                >
                    A missão da Blackcup é criar jogos que emocionem, divirtam e inspirem as pessoas. Buscamos oferecer experiências únicas e memoráveis, que conectem os jogadores com novos mundos e histórias. Nosso objetivo é impactar positivamente a vida das pessoas, proporcionando momentos de entretenimento e escapismo através de nossos jogos.
                </Typography>
            </div>
        </section >
    )

    return (
        <>
            <Navbar />
            {content}
            <Footer />
        </>
    );
}