import styled from 'styled-components'

export const ButtonSubmit = styled.button`
            width:100%;
            background:var(--base);
            color:white;
            border:none;
            padding:10px;
            margin:${(props) => props.margin ? '10px 0px' : '0px'};
            cursor:pointer;
           
            border-radius:var(--sl-border);
            font-size:var(--psize);
            :hover{
                background:var(--basehover);
            }
`;