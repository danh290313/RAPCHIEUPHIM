import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyles from '~/components/GlobalStyles';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<GlobalStyles>
   

    <BrowserRouter>
        <React.StrictMode>
        <Provider store={store}>
                <App />
                

                </Provider>
        </React.StrictMode>
    </BrowserRouter>,
   
    // </GlobalStyles>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
