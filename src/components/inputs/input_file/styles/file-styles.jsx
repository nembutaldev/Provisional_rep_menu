import styled from 'styled-components'



export const PrevioContainer = styled.section`
        width:100%;
        display:flex;
        justify-content:center;
        padding:10px;
        section{
            padding:10px;
            background:white;
            border:1px solid var(--colorcinco);
            border-radius:var(--md-border);
        }
        input{
            display:none;
        }

`;

export const PreviewImg = styled.label`
        width:${(props) => props.width ? props.width : '200px'};
        height:200px;
        background:var(--colorcuatro);
        display:flex;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        border-radius:var(--md-border);
        overflow:hidden;
        img{
            width:100%;
        }
        i{
            font-size:5rem;
            color:var(--colortres);
        }

`;