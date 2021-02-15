import styled from 'styled-components'



export const ContainerImgHome = styled.section`
    
        width:100%;
        padding:10px;
        text-align:center;
        img{
            width:100%;
            max-width:400px;
        }
        
`;

export const ContainerTxt = styled.article`
     
        display:flex;
        flex-flow:row;
        justify-content:center;
        article{
            display:flex;
            flex-flow:row wrap;
        

            @media (max-width:500px){
                flex-flow:column;
                padding:10px 0px;
            }
        }
        section{
            padding:10px;
            margin:5px;
            @media (max-width:500px){
                margin:0px 5px;
                padding:0px;
                
            }
            div{
                display:flex;
                align-items:center;
                color:var(--colordos);
               
                i{
                    padding:5px;
                    color:var(--colorcinco);
                }
            }
        }

        

`;