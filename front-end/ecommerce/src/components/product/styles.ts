import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
    height: 400px;
    border-radius: 16px;
    background-color: #4d4d4d;

    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 16px;
    }

    button {
        width: 200px;
        border: none;
        outline: none;
        padding: 8px;
        border-radius: 8px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #bb86fc;
        color: #fff;
        cursor: pointer;
        opacity: 0.7;

        svg {
            margin-right: 5px;
        }

        &:hover {
            opacity: 1;
            transition: opacity 0.4s;
        }
    }
`;

export const ProductInfo = styled.div`
    width: 250px;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h3 {
        font-weight: bold;
        color: #fff;
    }

    span {
        color: #9a9b9c;
        font-size: 14px;
    }
`;
