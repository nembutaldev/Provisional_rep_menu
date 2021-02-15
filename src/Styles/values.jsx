//Aqui van declaradas las variables globales
//
//Aqui se importa el src de las fuentes
import thin from '../fonts/Poppins-Thin.ttf'
import light from '../fonts/Poppins-Light.ttf'
import bold from '../fonts/Poppins-Bold.ttf'
import medium from '../fonts/Poppins-Medium.ttf'
//


//Array con fuentes para iterar
export const fuentes = [
    {
        fontfamily:'Medium',
        src:`${medium}`
    },
    {
        fontfamily:'Thin',
        src:`${thin}`
    },{
        fontfamily:'Light',
        src:`${light}`
    },{
        fontfamily:'Bold',
        src:`${bold}`
    }
]

//Aqui se setean los colores

export const colores = {
    '--base':'#7417FF',
    '--basehover':'#6614E0',
    '--colordos':'#2E384D',
    '--colordoshover':'#151B27',
    '--colortres':'#E0E7FF',
    '--colortreshover':'#AEB8D8',
    '--colorcuatro':'#EDF1FD',
    '--colorcuatrohover':'#C2C8DE',
    '--colorcinco':'#6788FF',
    '--colorcincohover':'#4D6BD6',
}

export const roundBorders = {
    '--sl-border':'3px',
    '--md-border':'6px',
    '--gd-border':'10px',
    '--xgd-border': '20px',
    '--circle-border':'100%'
}

export const fontSize = {
    '--h1size':'2rem',
    '--h2size':'1.6rem',
    '--psize':'1.2rem'
}

export const paddingSize = {
    '--sl-padding':'1rem',
    '--md-padding':'1.5rem',
    '--gd-padding':'2rem',

    //medidas en ejes y , x 
    
    '--x-sl-padding' : '0rem 1rem',
    '--x-md-padding' : '0rem 1.5rem',
    '--x-gd-padding' : '0rem 2rem',
    '--y-sl-padding' : '1rem 0rem',
    '--y-md-padding' : '1.5rem 0rem',
    '--y-gd-padding' : '2rem 0rem'
}

export const marginSize = {
    '--kid-margin':'0.5rem',
    '--sl-margin':'1rem',
    '--md-margin':'1.5rem',
    '--gd-margin':'2rem',

    //medidas en ejes y , x 

    '--x-sl-margin' : '0rem 1rem',
    '--x-md-margin' : '0rem 1.5rem',
    '--x-gd-margin' : '0rem 2rem',
    '--y-sl-margin' : '1rem 0rem',
    '--y-md-margin' : '1.5rem 0rem',
    '--y-gd-margin' : '2rem 0rem'
}