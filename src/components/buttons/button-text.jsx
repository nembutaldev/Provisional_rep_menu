import styled from 'styled-components'



export const ButtonText = styled.span`
            display:flex;
            width:100%;
            justify-content:flex-end;
            span{
                padding:10px;
                color:gray;
                cursor:pointer;
                font-family:'Light';
                :hover{
                    color:var(--base);
                }
            }

`;