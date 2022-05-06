export const API_ROOT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000' //dev
    : 'https://pawsadoption.herokuapp.com'; //prod
