import React from 'react';
import { ImgSupContainer } from './styles/titles-styles';
import { Link } from 'react-router-dom'

const ImgSup = (props) => {
    return (
        
        <ImgSupContainer imgWidth={props.imgWidth}>
            <Link to={props.ruta}>
                <img src={props.img} alt="PopAdvise"/>  
            </Link> 
        </ImgSupContainer>
        
    );
};

export default ImgSup;