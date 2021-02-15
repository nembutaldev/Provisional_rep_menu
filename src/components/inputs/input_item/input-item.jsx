import React from 'react';
import { InputItemCont, Item } from '../inputs';

const InputItem = (props) => {
    return (
        <InputItemCont>
            
            <p>{props.defaulttxt}</p>
            <Item           type="text"
                            placeholder={props.placeholder}
                            name={props.name}
                            id={props.id}
                            value={props.value}
                            onChange={props.onChange}
                            padding={props.padding}
                            />
        </InputItemCont>
    );
};

export default InputItem;