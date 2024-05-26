export const constRoutes = {
  home: '/',
  login: '/auth/signin',
  perfil: '/perfil',
  meusCursos: '/meus-cursos',
  meusEventos: '/meus-eventos',
  meusCertificados: '/meus-certificados',
  cadastro: '/auth/signup',
  cursos: '/cursos',
  cursoID: (id: number) => `/cursos/${id}`,
  eventos: '/eventos',
  eventoID: (id: number) => `/eventos/${id}`,
  sobre: '/sobre',
  suporte: '/fale-conosco'
}