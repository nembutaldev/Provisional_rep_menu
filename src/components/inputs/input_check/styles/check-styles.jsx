import styled from 'styled-components'
import Check from '../../../../assets/img/check.png'



export const CheckContainer = styled.section`
            input[type="checkbox"]{
                display:none;
                position:relative;
            }
            input[type="checkbox"] + label{
                display:flex;
                width:19px;
                padding:0px 0px 0px 0px;
                cursor:pointer;
            }
            input[type="checkbox"] + label span{
                display:inline-block;
                width:19px;
                height:19px;
                background:var(--colorcuatro);
                border:1px solid var(--colortres);
                border-radius:5px;
            }
            input[type="checkbox"]:checked + label span{
                background-image:url(${Check});
                background-size:cover;
                border:1px solid var(--base);
            }


            
`;