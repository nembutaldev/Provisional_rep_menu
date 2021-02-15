import styled,{keyframes} from 'styled-components';

const bounce = keyframes`
    0%{
        transform:translate3d(0px, 0px, 0px);
    }
    100%{
        transform:translate3d(0px, -100px, 0px);
    }
`

export const CargaContainer = styled.section`
    width:100%;
    height:100vh;
    background:var(--base);
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:100%;
        max-width:300px;
        animation:${bounce} 0.5s;
        animation-iteration-count:infinite;
        animation-direction:alternate-reverse;
        animation-timing-function:cubic-bezier(.63,0,.3,.99);
    }
`;