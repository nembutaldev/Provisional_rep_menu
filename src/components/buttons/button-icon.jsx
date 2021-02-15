import styled from 'styled-components'



export const ButtonIcon = styled.button`
        background:${(props) => props.backColor ? props.backColor : 'var(--base)'};
        color:${(props) => props.color ? props.color : 'white'};
        display:flex;
        justify-content:center;
        align-items:center;
        width:${(props) => props.size ? props.size : '30px'};
        height:${(props) => props.size ? props.size : '30px'};
        margin:${(props) => props.margin ? props.margin : '5px'};
        border-radius:var(--sl-border);
        border:none;
        cursor:pointer;
        
        i{
            color:${(props) => props.color ? props.color : 'white'};
            font-size:${(props) => props.fontSize ? props.fontSize : '0.8rem'};
        }

`;