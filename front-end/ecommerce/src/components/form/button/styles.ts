import styled from 'styled-components';

export const Container = styled.button`
    background-color: #bb86fc;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
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

    svg {
        margin-right: 5px;
    }
`;
