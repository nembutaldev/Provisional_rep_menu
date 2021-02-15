import React from 'react';
import { Input } from '../inputs';

const InputTimeAlt = (props) => {
    return (
        <>
            <Input  name={props.name}
                    id={props.ide}
                    disabled={props.disabled}
                    />   
        </>
    );
};

export default InputTimeAlt;