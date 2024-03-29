const products = '/san-pham';
const routes = {
  home: '/',
  // products: `${products}/:category/*`,
  // productDetail: "/products/:id",
  // admin: "/admin",
  customerLogin: '/customer/login',
  customerForgetPassword: 'forgetpassword',
  customerAccount: '/customer/*',
  // customer_register: "/customer/register"
  moviePlaying: 'movie/now-showing',
  movieDetail: 'movie/movie-detail/:movieId',
  bookingSeat: 'movie/booking/seat',
  movie: 'phim/phimchieu',
  ticketPayment: 'movie/ticket-payment',
  qrCodeScan: 'movie/ticket-payment/qrcode',
};
export default routes;
