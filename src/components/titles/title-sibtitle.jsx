import React from 'react';
import { TitleContain } from './styles/titles-styles';

const TitleSubtitle = (props) => {
    return (
    
        <TitleContain center={props.center}>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>   
        </TitleContain>
        
    );
};

export default TitleSubtitle;