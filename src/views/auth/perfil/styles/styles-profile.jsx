import styled from 'styled-components'




export const CardProfile = styled.article`
            background:white;
            padding:20px;
            border-bottom:1px solid var(--colortres);
            section{
               
                display:flex;
                flex-flow:row wrap;
                div{
                   
                    padding:10px;
                    h1{
                        font-size:1.1rem;
                        color:var(--colordos);
                    }
                    p{
                        font-size:0.8rem;
                        font-family:'Light';
                        
                    }
                    i{
                        font-size:1.2rem;
                        color:var(--colorcinco);
                    }
                }
            }
`;