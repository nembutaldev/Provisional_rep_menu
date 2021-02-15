import styled from 'styled-components'


export const InputSelectApi = styled.section`
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