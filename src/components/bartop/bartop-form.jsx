import React from 'react';
import { BarTopFormContainer } from './styles/bartop-styles';

const BartopForm = (props) => {
    return (
        <BarTopFormContainer>
            <section className="left">
                <span><i className={props.icon}></i></span>
            </section>  
            <section className="right">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </section>
        </BarTopFormContainer>
    );
};

export default BartopForm;