import styled from 'styled-components'


export const TitleContain = styled.section`
            width:100%;
            max-width:${(props) => props.maxWidth};
            display:flex;
            flex-flow:column;
            align-items:${(props) => props.center ? 'center' : 'flex-start'};
            padding:20px;
            h1{
                font-size:var(--h1size);
                font-family:'Bold';
                color:var(--colordos);
                @media (max-width:500px){
                    text-align:center;
                }
            }
            p{
                font-size:var(--psize);
                font-family:'Light';
                color:var(--colordos);
                @media (max-width:500px){
                    text-align:center;
                }
            }
`;

export const ImgSupContainer = styled.section`
           
            display:flex;
            justify-content:center;
            align-items:center;
            padding:10px;
            img{
                width:100%;
                max-width:${(props)=> props.imgWidth || '200px'}
            }
`;