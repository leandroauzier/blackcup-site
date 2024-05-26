export const constRoutes = {
  home: '/',
  login: '/auth/signin',
  cadastro: '/auth/signup',
  cursos: '/cursos',
  cursoID: (id: number) => `/cursos/${id}`,
  eventos: '/eventos',
  eventoID: (id: number) => `/eventos/${id}`,
  sobre: '/sobre',
  suporte: '/fale-conosco'
}