import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import AppProvider from './context';
const App: React.FC = () => (
    <>
        <Router>
            <AppProvider>
                <Routes />
            </AppProvider>
        </Router>

        <GlobalStyle />
        <ToastContainer theme={'dark'} />
    </>
);

export default App;
