import styled from 'styled-components'




export const ButtonAction = styled.button`
        width:100%;
        max-width:${(props) => props.maxWidth ? props.maxWidth : '200px'};
        background:var(--base);
        color:white;
        cursor:pointer;
        border:none;
        border-radius:var(--sl-border);
        padding:10px;
        font-size:1rem;
        font-family:'light';
        display:flex;
        align-items:center;
        justify-content:center;
        i{
            color:white;
            margin-left:${(props) => props.icon ? ' 5px' : '0px'};
        }
        :hover{
            background:var(--basehover);
        }
`;