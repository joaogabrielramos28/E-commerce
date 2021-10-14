import styled,{css, keyframes} from 'styled-components'

interface ContainerProps{
    ref:any;
    isOpen:boolean;
}


export const Animate = keyframes`
    from{
        margin-right:-100vw
    }to{

        margin-right:0vw
    }
`

export const Container = styled.div<ContainerProps>`

    position:fixed;
    right:0;
    top:0;
    height:100vh;
    background:#121212;
    width:30vw;
    animation: ${props =>
    props.isOpen &&
    css`
      ${Animate} 0.4s
    `};
    z-index:100;
`


export const Overlay = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,.5);
    z-index:10;

`

