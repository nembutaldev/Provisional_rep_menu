import styled from 'styled-components'


export const Form = styled.form`
        padding:20px;
        width:100%;
        max-width:${(props) => props.maxWidth || '500px'};
        border:${(props) => props.border ? '1px solid var(--colorcinco)': 'none'};
        border-radius:${(props) => props.border ? 'var(--xgd-border)' : '0px'};
        @media (max-width:500px){
                border:none;
        }
        .error{
                border:1px solid red;
                background:#FAEAEA;
                :focus{
                        border:1px solid red;  
                }
        }
        .success{
                
        }
        
`;

export const FieldInput = styled.section`
        width:100%;
        max-width:${(props) => props.maxWidth};
        display:flex;
        flex-flow:column;
        margin:var(--y-sl-margin);
        @media (max-width:500px){
                max-width:100%;
        }
`;

export const Label = styled.label`
        padding:0.5rem 0px;
        color:var(--colordos);
`;


// ESTILOS DEL COMPONENTE DE GOOGLE

export const GoogleContainer = styled.section`
       
        width:100%;
        position:relative;
        .map-sug{
                color:var(--colordos);
        }
        .map-act{
                cursor:pointer;
                background:white;
                font-family:'light';
        }
        .map-act:hover{
                background:var(--base);
                color:white;
        }
        .map-cont{
                width:100%;
                position:relative;
                position:absolute;
                z-index:100;
        }
        input{
                width:100%;
                height:40px;
                padding:10px;
                border:1px solid var(--colortres);
                border-radius:var(--md-border);
                outline:none;
                font-size:1rem;
                font-family:'Light';
                background:var(--colorcuatro);
                :-ms-input-placeholder{
                color:#ccc;
                }
                ::-webkit-input-placeholder{
                color:#BEC9EF;
                }
                :focus{
                border:1px solid var(--base);
                }
        }
`;


//ESTILOS DE INPUT SELECT

export const SelectContainer = styled.section`
        
        display:flex;
        width:100%;
        position:relative;
        overflow:hidden;
        border-radius:var(--md-border);
        border:1px solid var(--colortres);
        :hover span{
                        background:var(--basehover);
                }
        span{    
                width:40px;
                height:40px;
                background:var(--base);
                position:absolute;
                pointer-events:none;
                right:0px;
                top:0px;
                display:flex;
                justify-content:center;
                align-items:center;
                i{
                        color:white;
                        font-size:2rem;
                }
                
        }
       
        select{
                -moz-appearance:none;
                -webkit-appearance:none;
                width:100%;
                height:40px;
                padding:10px;
                border:none;
                border-radius:var(--md-border);
                outline:none;
                font-size:1rem;
                font-family:'Light';
                background:var(--colorcuatro);
                cursor:pointer;
                :focus{
                        border:1px solid var(--base);
                }
        }
        
`;


// -----------------> INPUT TIME

export const TimeContainer = styled.section`
                
                width:100%;
                max-width:200px;
                display:flex;
                overflow:hidden;
                border-radius:var(--md-border);
                position:relative;
                border:1px solid var(--colortres);
     
                filter:${(props)=> props.disabled ? 'contrast(110%)' : 'contrast(100%)'};

                span{
                        width:40px;
                        height:40px;
                        background:var(--base);
                        position:absolute;
                        right:0px;
                        top:0px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        i{
                                color:white;
                        }
                }
                input[type="time"]{
                        width:100%;
                        height:40px;
                        padding:10px;
                        border:none;
                        border-radius:var(--md-border);
                        outline:none;
                        font-size:1rem;
                        font-family:'Light';
                        background:var(--colorcuatro);
                        :focus{
                        border:1px solid var(--base);
                        }
                }
`;


export const NumberContainer = styled.section`
              
                width:100%;
                display:flex;
                position:relative;
                justify-content:center;
                align-items:center;
                padding:50px 0px;

                span{
                        width:40px;
                        height:40px;
                        background:var(--base);
                        border-radius:100%;
                        cursor:pointer;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        margin:0px 10px;
                        i{
                                color:white;
                        }
                        :hover{
                                background:var(--basehover);
                        }
                }

                input[type=number]::-webkit-outer-spin-button,
                input[type=number]::-webkit-inner-spin-button{
                        -webkit-appearance: none;
                        margin: 0;  
                }
                input[type=number]{
                        width:100%;
                        max-width:40px;
                        height:40px;
                        padding:10px;
                        text-align:center;
                        border-radius:var(--md-border);
                        outline:none;
                        font-size:1rem;
                        font-family:'Light';
                        background:var(--colorcuatro);
                        border:1px solid var(--colortres);
                        :focus{
                        border:1px solid var(--base);
                        }
                }
`;


export const VerifyContainer = styled.section`
   
                width:300px;
                margin:auto;
                display:flex;
                justify-content:center;

                input[type=number]::-webkit-outer-spin-button,
                input[type=number]::-webkit-inner-spin-button{
                        -webkit-appearance: none!important;
                        margin: 0!important;  
                }
                input{
                        width:50px!important;
                        height:50px!important;
                        padding:10px!important;
                        text-align:center;
                        border-radius:var(--sl-border)!important;
                        outline:none!important;
                        font-size:1.2rem!important;
                        font-family:'Medium'!important;
                        background:var(--colorcuatro)!important;
                        border:1px solid var(--colorcinco)!important;
                        margin:0px 10px!important;
                        color:var(--coloruno)!important;
                        :focus{

                                border:1px solid var(--base)!important;

                        }
                }
`;




export const ContainerTimer = styled.section`
        
        position:relative;
        span{
            
                width:40px;
                height:40px;
                position:absolute;
                right:0px;
                top:0px;
                display:flex;
                justify-content:center;
                align-items:center;
                i{
                        font-size:1.2rem;
                }
        }
`;
