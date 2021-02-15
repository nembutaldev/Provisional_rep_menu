import React from 'react';
import { TimeContainer } from '../item-forms';

const InputTime = (props) => {
    return (
        <TimeContainer disabled={props.disabled}>
            
            <span><i className={props.icon}></i></span>
            <input      type="time"
                        name={props.name}
                        id={props.ide}
                        onChange={props.onChange}
                        value={props.valor}
                        disabled={props.disabled}
                        required
                        /> 
            
        </TimeContainer>
    );
};

export default InputTime;