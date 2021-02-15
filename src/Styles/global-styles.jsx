import { createGlobalStyle, css } from 'styled-components'
import { 

            colores,
            roundBorders,
            fontSize,
            paddingSize,
            marginSize,
            fuentes

        } from './values'


//Esta funcion itera un arreglo con fuentes
const fonts = (fuentes) =>{
    const mapFonts = fuentes.map((fuente)=>{
        return `  @font-face{
                            font-family:${fuente.fontfamily};
                            src:url(${fuente.src});
                            }`
    })
    return mapFonts;
}

const variables = css`
    :root{
        ${colores}
        ${roundBorders}
        ${fontSize}
        ${paddingSize}
        ${marginSize}
    }
    
`;


//InitStyles va declarado en index.js

export const InitStyles = createGlobalStyle`
            
    ${fonts(fuentes)}
           
    ${variables}

    *{
        padding:0px;
        margin:0px;
        box-sizing:border-box;
        color:${(props)=> props.baseColor || 'var(--base)'};
        font-family:${(props) => props.baseFont || 'Medium'};
    }
  
         
`;