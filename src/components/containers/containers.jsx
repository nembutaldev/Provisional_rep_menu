import styled from 'styled-components';



export const CenterElement = styled.article` 
        width:100%;
        min-height:100vh;
        display:flex;
        flex-flow:row wrap;
        justify-content:center;
        align-content:center;
`;

export const CenterItem = styled.section`
        width:100%;
        padding:10px;
        text-align:center;
`;

export const CenterTop = styled.article` 
        width:100%;
        min-height:100vh;
        display:flex;
        flex-flow:row wrap;
        justify-content:center;
        padding-top:20px;
`;




export const WidthCaja = styled.section`
       
        width:100%;
        max-width:${(props) => props.maxWidth || '500px'};
        display:flex;
        flex-flow:${(props) => props.flow};
        margin:30px 0px;
        
`


export const Split = styled.section`
        display:flex;
        flex-flow:row wrap;
        justify-content:space-between;
        align-items:center;
        @media (max-width:500px){
                flex-flow:column;
                align-items:center;
                justify-content:center;
        }
        .left{
                width:40%;
                margin:${(props)=> props.margin ? '0px 10px' : '0px'};
        }
        .right{
                width:40%;
                margin:${(props)=> props.margin ? '0px 10px' : '0px'};
        }
`;



//CARD DE SUCURSAL
export const CardContainer = styled.section`
        border:1px solid var(--base);
        padding:20px;
        display:flex;
        align-items:center;
        border-radius:var(--gd-border);
        margin:10px 0px;
        position:relative;
        .published{
                position:absolute;
                right:10px;
                bottom:10px;
                p{
                        font-size:0.7rem;
                        color:gray;
                }
        }
        .icon{
                width:80px;
                height:80px;
                background:var(--base);
                border-radius:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                overflow:hidden;
                
                img{
                        width:100%;
                        display:flex;
                }

                i{
                        color:white;
                        font-size:1.7rem;
                        
                }
        }
        .info{
                padding:10px;
                position:relative;
                width:calc(100% - 100px);
                h1{
                        overflow:hidden;
                        text-overflow:ellipsis;
                        font-size:1.2rem;
                        font-family:'Bold';
                        color:var(--colordos);
                        height:30px;
                        white-space:nowrap;
                        
                }
                p{
                        position:absolute;
                        background:white;
                        border-radius:3px;
                        width:100%;
                        padding:10px;
                        left:50%;
                        transform:translateX(-50%);
                        top:-100%;
                        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
                        font-size:0.9rem;
                }
        }

`;


// --------------------------> RENDER ITEM SUCURSAL
export const ItemCaja = styled.section`
        
                display:flex;
                flex-flow:column;
                padding:10px;
                border-bottom:1px solid var(--colortres);
                .title{
                       
                        display:flex;
                        width:100%;
                        justify-content:space-between;
                        .left{
                                display:flex;
                                align-items:center;
                                
                                span{
                                        width:30px;
                                        height:30px;
                                        background:var(--base);
                                        display:flex;
                                        justify-content:center;
                                        align-items:center;
                                        border-radius:100%;
                                        i{
                                                color:white;
                                        }
                                }
                                h1{     
                                        width:100%;
                                        max-width:200px;
                                        padding:0px 10px;
                                        font-size:1.1rem;
                                        overflow:hidden;
                                        white-space:nowrap;
                                        text-overflow:ellipsis;
                                        
                                }
                        }
                        .right{
                                display:flex;
                                align-items:center;
                                a{
                                        text-decoration:none;
                                        i{
                                                padding:0px 10px;
                                        }
                                        :hover{
                                                color:var(--basehover);
                                        }
                                        :hover i{
                                                color:var(--basehover);
                                        }
                                }
                        }
                }
`;      