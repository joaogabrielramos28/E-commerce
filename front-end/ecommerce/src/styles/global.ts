import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-family: 'Open Sans', sans-serif;
        text-decoration:none;
    }


    #root{
        background-color:#1C1C1E;
    }
`;

export default GlobalStyle;
