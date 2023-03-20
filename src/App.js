import './App.css';
import { Fragment } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
