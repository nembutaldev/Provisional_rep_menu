import React from 'react';
import { BartopListContainer } from './styles/bartop-styles';
import {Link} from 'react-router-dom'


const BartopList = (props) => {
    return (
        <BartopListContainer>

            <section className="icon">
                <span> <i className={props.icon}></i></span>
                <h1>{props.title}</h1>
            </section>


            <section >
                <Link to={props.ruta}>
                    {props.btntxt}
                    <i className={props.btnicon}></i>
                </Link>
            </section>
        </BartopListContainer>
    );
};

export default BartopList;