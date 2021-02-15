import React from 'react';
import PhoneInput,{parsePhoneNumber, isValidPhoneNumber} from 'react-phone-number-input';
import { InputPhoneContainer } from '../inputs';

const InputPhone = (props) => {
    return (
        <div>
            <InputPhoneContainer validate={props.phoneValidate}>
                <PhoneInput  
                                placeholder="Escribe tu numero, no olvides incluir el 55"
                                value={props.valor}
                                onChange={props.onChange}
                                defaultCountry="MX"
                                error={props.validate} 
                                />                
                            
            </InputPhoneContainer>
            
        </div>
    );
};

export default InputPhone;