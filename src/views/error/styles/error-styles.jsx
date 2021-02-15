import styled,{ keyframes } from 'styled-components'

const bounce = keyframes`
    0%{
        transform: translate3d(0px, -20px, 0px);
    }
    100%{
        transform: translate3d(0px, 0px, 0px);
    }
`;


export const ContainerError = styled.section`
    width:100%;
    min-height:100vh;
    
    display:flex;
    justify-content:center;
    align-items:center;
    flex-flow:column;
    .animation{
        
        img{
            width:100%;
            max-width:300px;
            animation:${bounce} 0.5s infinite;
            animation-direction:alternate-reverse;
            animation-timing-function:cubic-bezier(.43,.04,.69,.99);
        }
    }
    .text{
        padding:20px;
    }
`;