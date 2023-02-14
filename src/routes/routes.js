import { Navigate } from 'react-router-dom';
import config from '~/config';
import DefaultLayout from '~/layouts/DefaultLayout';
import HomePage from '~/pages/HomePage/HomePage';
import Login from '~/pages/Login/Login';
import MenuAccount from '../pages/MenuAccount/MenuAccount';

const publicRoutes = [
    { path: config.routes.home, component: HomePage, layout: DefaultLayout },
    { path: config.routes.customerLogin, component: Login, layout: DefaultLayout },
    { path: config.routes.customerAccount, component: MenuAccount, layout: DefaultLayout },
    // {
    //   path: config.routes.products,
    //   component: Products,
    //   layout: SidebarLayout,
    // },
    // { path: config.routes.admin, component: AdminPage },
    // {
    //   path: config.routes.productDetail,
    //   component: ProductDetail,
    //   layout: DefaultLayout,
    // },
    // {
    //   path: "/*",
    //   component: () => <Navigate to={"/"} />,
    // },
    // {path: config.routes.customer_register, component: Account, layout: DefaultLayout },
];
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
