import styled from 'styled-components';

export const Container = styled.header`
    margin: 0 auto;
    max-width: 1400px;
    background-color: #202226;
    padding: 16px 32px;
    border-radius: 8px;
    color: #fff;
    margin-bottom: 30px;
`;
export const Content = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: -10;

    svg {
        cursor: pointer;

        &:hover {
            opacity: 0.5;
            transition: opacity 0.4s;
        }
    }
`;

export const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        font-weight: bold;
        color: #ffffff;
        opacity: 38%;
        margin: 0 10px;
        transition: opacity 0.4s;

        &:hover {
            opacity: 1;
            transition: opacity 0.4s;
        }
    }
`;
