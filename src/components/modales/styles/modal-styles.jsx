import styled from 'styled-components'



export const BackModal = styled.section`
        background:rgba(0,0,0,0.8);
        width:100%;
        height:100vh;
        position:fixed;
        top:0px;
        left:0px;
        cursor:pointer;
        display:${(props) => props.toggle ? 'block' : 'none'};
`;

export const CajaModal = styled.section`
        width:100%;
        max-width:500px;
        max-height:500px;
        overflow:scroll;
        position:fixed;
        left:50%;
        top:${(props) => props.toggle ? '50%' : '0px'};
        transform:${(props) => props.toggle ? 'translate3d(-50%, -50%, 0px)' : 'translate3d(-50%, -100%, 0px)'};
        padding:10px;
        background:white;
        transition:0.3s;
        border-radius:var(--gd-border);
`;


export const BackModalCopy = styled(BackModal)`
        display:${(props) => props.toggleCopy ? 'block' : 'none'};
`;
export const CajaModalCopy = styled(CajaModal)`
        top:${(props) => props.toggleCopy ? '50%' : '0px'};
        transform:${(props) => props.toggleCopy ? 'translate3d(-50%, -50%, 0px)' : 'translate3d(-50%, -100%, 0px)'};

`;