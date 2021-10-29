import styled from 'styled-components';

export const Container = styled.button`
    background-color: #bb86fc;
    height: 50px;
    border-radius: 10px;
    border: 0;
    color: #ffff;
    width: 100%;
    min-width: 370px;
    font-weight: 500;
    margin-top: 16px;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
        opacity: 1;
        transition: opacity 0.4s ease;
    }
`;
