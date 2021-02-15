import React from 'react';
import nave from '../../assets/img/nave.png'
import { Link } from 'react-router-dom'
import { ContainerError } from './styles/error-styles';


const Error404 = () => {
    return (
            <ContainerError>
                <section className="animation">
                    <img src={nave} alt="PopAdvise"/>
                </section>
                <section className="text">
                    <h1>Pagina no encontrada <Link to="/">Regresar</Link></h1>
                </section>
            </ContainerError>
    );
};

export default Error404;