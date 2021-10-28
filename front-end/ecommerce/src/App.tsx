import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
const App: React.FC = () => (
    <>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <GlobalStyle />
        <ToastContainer theme={'dark'} />
    </>
);

export default App;
