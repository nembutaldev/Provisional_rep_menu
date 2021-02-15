import styled from 'styled-components'


export const QrContainer = styled.section`
            p{
                color:var(--colordos);
                font-family:'Light'
            }
            div:nth-child(2){
                
                display:flex;
                padding:10px 0px;
            }
            a{
                background:var(--base);
                color:white;
                width:100%;
                padding:10px;
                display:flex;
                justify-content:center;
                align-items:center;
                text-decoration:none;
                border-radius:3px;
                :hover{
                    background:var(--basehover);
                }
                i{
                    color:white;
                    padding:0px 5px;
                    font-size:1rem;
                }
            }
`;