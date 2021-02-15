import React from 'react';
import { CheckContainer } from './styles/check-styles';

const InputCheck = (props) => {
    return (
        <CheckContainer>
            <input  type="checkbox"
                    id={'option_' + props.i}
                    value={props.option}
                    name={props.name}
                    onChange={props.onChange}
                    checked={props.checked}
                    defaultChecked={props.defaultChecked}
                    />


            <label htmlFor={'option_' + props.i}>
                <span></span>
            </label>

        </CheckContainer>
    );
};

export default InputCheck;