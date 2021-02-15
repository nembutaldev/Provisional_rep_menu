import React from 'react';
import { CargaContainer } from './styles/carga-styles';
import LogoItem from '../../assets/img/pop-logo.png'


const Carga = () => {
    return (
        <CargaContainer>
            {/* ESTE COMPONENTE SE RENDERIZA
            CADA VES QUE CAMBIA LA VISTA */}
            <img src={LogoItem} alt="PopAdvise"/>
        </CargaContainer>
    );
};

export default Carga;