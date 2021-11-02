import styled from 'styled-components';
export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    height: 300px;
    flex: 1;

    h2,
    h4 {
        color: #9a9b9c;
    }

    h2 {
        font-size: 28px;
    }

    span {
        color: #bb86fc;
        font-weight: bold;
        font-size: 26px;
    }
`;

export const ImageSlider = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    flex-direction: column;

    .principal-image {
        width: 100%;
        object-fit: cover;
        margin: 0 auto;
        height: 460px;
        object-fit: cover;
    }

    div {
        width: 100%;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        img {
            margin: 20px 5px;
            width: 70px;
            cursor: pointer;
            object-fit: cover;
        }
    }
`;
