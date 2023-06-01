import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout';
import { privateRoutes, publicRoutes } from '~/routes/routes';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const currentUser = useSelector(state => state.auth.user);
  return (
    <Routes>
      {publicRoutes.map((route, i) => {
        let Layout = DefaultLayout;
        if (route.Layout) {
          Layout = route.Layout;
        } else if (route.layout === null) {
          Layout = Fragment;
        }
        const Page = route.component;
        return (
          <Route
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
            key={i}
          />
        );
      })}

      {privateRoutes.map((route, i) => {
        let Layout = DefaultLayout;
        if (route.layout) {
          Layout = route.layout;
        } else if (route.layout === null) {
          Layout = Fragment;
        }
        const Page = route.component;
        return (
          <Route
            path={route.path}
            element={
              currentUser?.roles[1] === 'ROLE_CLIENT' ? (
                <Layout>
                  <Page />
                </Layout>
              ) : (
                <Navigate to='/' />
              )
            }
            key={i}
          />
        );
      })}
    </Routes>
  );
}

export default App;
