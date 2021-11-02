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
