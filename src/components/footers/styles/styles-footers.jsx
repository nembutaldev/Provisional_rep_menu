import styled from 'styled-components'

export const ContainerFooterForm = styled.footer`
            width:100%;
            padding:20px;
            p{
                color:var(--colordos);
                font-family:'Light';
            }
           
`;


export const ContainerFooterRedes = styled.footer`
            
            padding:10px 0px;
            display:flex;
            flex-flow:row wrap;
            justify-content:space-around;
            align-items:center;
            @media (max-width:500px){
                flex-flow:column;
            }
            
            p{
                font-size:0.8rem;
                font-family:'Light';
                @media (max-width:500px){
                    padding:5px 0px;
                }
            }
            section{
                
                display:flex;
                a{
                   
                    margin:0px 3px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    text-decoration:none;
                    i{
                        font-size:1.5rem;
                        :hover{
                            color:var(--basehover);
                        }
                    }
                }
            }

`;