import styled from 'styled-components'




export const BartopContainer = styled.nav`
        width:100%;
        border-bottom:1px solid var(--colortres);
`;

export const BarTopCaja = styled.section`
        width:100%;
        max-width:1200px;
        margin:auto;
        display:flex;
        flex-flow:row wrap;
        justify-content:space-between;
        padding:10px;
        .left{
            display:flex;
            align-items:center;
           
            img{
                width:50px;
            }
            h1{
                padding:10px;
                font-size:1.5rem;
                color:var(--colorcinco);
            }
        }
        .right{
            display:flex;
            flex-flow:row wrap;
            align-items:center;
           
            p{
                font-family:'Light';
                color:var(--colorcinco);
            }
            div{
                padding:10px;
            }
            a{
                text-decoration:none;
                span{
                    color:var(--colorcinco);
                    font-family:'Light';
                }
                :hover span{
                    color:var(--colorcincohover);
                }
                :hover i{
                    color:var(--colorcincohover);
                }
            }

        }
        button{
            cursor:pointer;
            background:none;
            border:none;
            font-size:1.2rem;
        }
        i{
            padding:0px 5px;
            color:var(--colorcinco);
            :hover{
                color:var(--colorcincohover);
            }
        }
        a{
            text-decoration:none;
        }
        @media (max-width:700px){
            justify-content:center;
        }
`;



export const BarTopFormContainer = styled.section`
      
        display:flex;
       
        align-items:center;
        .left{
           
            display:flex;
            padding:10px;
            span{
                width:70px;
                height:70px;
                border-radius:100%;
                background:var(--base);
                display:flex;
                justify-content:center;
                align-items:center;
                i{
                    font-size:2rem;
                    color:white;
                }
            }
        }
        .right{
            
            padding:10px;
            h1{
                font-family:'Bold';
                font-size:1.2rem;
                color:var(--colordos);
            }
            p{
                font-family:'Light';

            }
        }      

`;



export const BartopListContainer = styled.section`
           
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:10px;
            border-bottom:1px solid var(--colortres);
            .icon{
                display:flex;
                align-items:center;
                h1{
                    padding:0px 10px;
                    font-size:1.1rem;
                    font-family:'Bold';
                }
                span{
                    width:35px;
                    height:35px;
                    background:var(--base);
                    border-radius:100%;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    i{
                        color:white;

                    }
                }
            }
            a{
                text-decoration:none;
                display:flex;
                align-items:center;
                i{
                    padding-left:10px;
                }
            }
`;