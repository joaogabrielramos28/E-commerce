import styled from 'styled-components';
import RegisterBackground from '../../assets/registerImg.jpg';
export const Back = styled.div`
    padding: 16px 16px;
    display: flex;
    flex-direction: row;
    height: 40px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #ffff;
        text-decoration: none;

        &:hover {
            opacity: 0.7;
            transition: opacity 0.4s ease-in-out;
        }
    }
`;

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;
    text-align: center;
    color: #fff;
    form {
        margin: 80px 0 0 0;
        width: 340px;
        text-align: center;
    }
    h2 {
        margin: 34px 0;
    }
`;

export const Background = styled.div`
    flex: 1;
    z-index: 1;
    background: url(${RegisterBackground}) no-repeat center;
    background-size: cover;
`;
