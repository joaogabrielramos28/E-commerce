import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;
    padding: 16px;
    width: 100%;
    color: #666360;

    display: flex;
    align-items: center;
    ${(props) =>
        props.isFocused &&
        css`
            color: #bb86fc;
            border: 2px solid #bb86fc;
        `}
    ${(props) =>
        props.isFilled &&
        css`
            color: #bb86fc;
        `}
    & + div {
        margin-top: 10px;
    }
    input {
        outline: none;
        background-color: transparent;
        border: 0;
        flex: 1;
        color: #f4ede8;

        &::placeholder {
            color: #666360;
        }
    }

    svg {
        margin-right: 16px;
    }
`;
