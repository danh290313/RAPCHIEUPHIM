import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DefaultLayout from '~/layouts/DefaultLayout';
import { privateRoutes, publicRoutes } from '~/routes/routes';
import './App.css';

function App() {
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
    </Routes>
  );
}

export default App;
