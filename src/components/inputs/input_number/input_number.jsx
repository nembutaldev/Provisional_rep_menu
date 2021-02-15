import React from 'react';
import { NumberContainer } from '../item-forms';

const InputNumber = (props) => {
    return (
        
        <NumberContainer>
            <span className="mas" onClick={props.removeNumber}>
                <i className="fas fa-minus"></i>
            </span>
            <input type="number"
                    value={props.valor}
                    name={props.name}
                    onChange={props.onChange}
                    pattern="^[0-9]+"
                    min="0"
                    />
            <span className="menos" onClick={props.addNumber}>
                <i className="fas fa-plus"></i>
            </span>   
        </NumberContainer>
        
    );
};

export default InputNumber;