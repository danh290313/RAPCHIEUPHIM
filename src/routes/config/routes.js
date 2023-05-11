const products = '/san-pham';
const routes = {
  home: '/',
  // products: `${products}/:category/*`,
  // productDetail: "/products/:id",
  // admin: "/admin",
  customerLogin: '/customer/login',
  customerAccount: '/customer/*',
  // customer_register: "/customer/register"
  moviePlaying: 'movie/now-showing',
  movieDetail: 'movie/movie-detail/:movieId',
  bookingSeat: 'movie/booking/seat',
  movie: 'phim/phimchieu',
};
export default routes;
