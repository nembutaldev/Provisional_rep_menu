import styled from 'styled-components'





export const Input = styled.input.attrs(props => ({
    type: props.type,
    name:props.name,
    id:props.id,
    value:props.value,
    placeholder: props.placeholder,
    minLength:props.min,
    maxLength: props.max
    
}))`

        width:100%;
        height:40px;
        padding:${(props) => props.padding ? props.padding : '10px'};
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

`;

export const Item = styled(Input)`
        padding:${(props) => props.padding ? props.padding : '10px 10px 10px 190px'};
`;

export const InputItemCont = styled.section`
     
        position:relative;
        p{
            position:absolute;
            left:10px;
            top:50%;
            transform:translateY(-50%);
            color:var(--colordos);
            font-family:'Light';
            font-size:0.8rem;
        }
`;

export const Pass = styled(Input)`
        padding:10px 55px 10px 10px;
`;

export const InputPassCont = styled.section`
            background:#ccc;
            border-radius:var(--md-border);
            overflow:hidden;
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
                cursor:pointer;
                i{
                    font-size:1.2rem;
                    color:var(--colorcinco);
                :hover{
                    color:var(--colorcincohover);
                }
                }
            }
`;



export const TextArea = styled.textarea.attrs((props) => ({
        name: props.name,
        value: props.value,
        placeholder: props.placeholder,
        onChange: props.onChange
}))`
        background:blue;
        width:100%;
        border:1px solid var(--colortres);
        background:var(--colorcuatro);
        outline:none;
        border-radius:var(--md-border);
        min-height:150px;
        resize:none;
        padding:10px;
        font-size:1rem;
        font-family:'Light';
        :-ms-input-placeholder{
            color:#ccc;
        }
        ::-webkit-input-placeholder{
            color:#BEC9EF;
        }
        :focus{
            border:1px solid var(--base);
        }

`;



export const  InputLineBottom = styled(Input)`
                border:none;
                background:none;
                border-radius:0px;
                height:10px;
                
                :focus{
                    border:none;
                    
                }

`;




export const InputPhoneContainer = styled.section`
       


        input{
            width:100%;
            height:40px;
            padding:10px;
            border:${(props) => props.validate ? '1px solid var(--colortres)' : '1px solid red'};
            border-radius:var(--md-border);
            outline:none;
            font-size:1rem;
            font-family:'Light';
            background:var(--colorcuatro);
            background:${(props) => props.validate ? 'var(--colorcuatro)' : '#FAEAEA'};
            :-ms-input-placeholder{
                color:#ccc;
            }
            ::-webkit-input-placeholder{
                color:#BEC9EF;
            }
            :focus{
                border:${(props) => props.validate ? '1px solid var(--base)' : '1px solid red' };
            }
        }




`;