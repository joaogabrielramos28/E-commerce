import styled, { css, keyframes } from 'styled-components';

interface ContainerProps {
    ref: any;
    isOpen: boolean;
}

export const Animate = keyframes`
    from{
        margin-right:-100vw
    }to{

        margin-right:0vw
    }
`;

export const Container = styled.div<ContainerProps>`
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    background: #212121;
    width: 30vw;
    animation: ${(props) =>
        props.isOpen &&
        css`
            ${Animate} 0.4s
        `};
    z-index: 100;
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #fff;
    padding: 16px 12px;
    gap: 50px;
    margin-bottom: 12px;
    span {
        padding: 0 12px;
        font-weight: bold;
        font-size: 22px;
    }
    a {
        padding: 0 30px;
        font-size: 16px;
        color: #97282e;
    }
`;

export const ProductList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    height: 60%;
    max-height: 60%;
    overflow-y: scroll;
`;

export const Product = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-start;
    background: #4d4d4d;
    color: #ececec;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 12px;
    img {
        width: 100px;
        height: 100px;
        border-radius: 12px 0 0 12px;
    }

    .infos {
        display: flex;
        flex-direction: column;
        padding: 4px 8px;
        flex: 1;
        h4 {
            width: 100%;
        }
        span {
            font-weight: bold;
            color: #9a9b9c;
            font-size: 12px;
            margin-top: 5px;
        }
    }

    .tes {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50px;
        padding: 4px 0;
        button {
            background: transparent;
            outline: none;
            border: 0;
            cursor: pointer;
            color: #97282e;
            text-align: center;
        }

        span {
            position: relative;

            input {
                padding: 5px;
                margin: 0 0 0 5px;
                width: 35px;
                border: none;
                color: #f0f0f0;

                background: transparent;
                outline: none;
            }
        }
    }
`;

export const BuyContainer = styled.div`
    width: 100%;
    background-color: #4d4d4d;
    border-radius: 8px 8px 0 0;
    display: flex;
    height: 300px;
    align-items: center;
    justify-content: center;

    button {
        width: 180px;
        border: none;
        outline: none;
        margin: 0 auto;
        background-color: #bb86fc;
        color: #fff;
        padding: 12px 36px;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
        opacity: 0.7;
        font-weight: bold;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        &:hover {
            opacity: 1;
            transition: opacity 0.4s;
        }
    }
`;

export const CartInfo = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 30px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    p {
        color: #9a9b9c;
        font-weight: bold;
    }

    span {
        color: #fff;
        font-weight: bold;
        font-size: 20px;
    }
`;
