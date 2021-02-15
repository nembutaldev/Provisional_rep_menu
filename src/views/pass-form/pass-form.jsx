import React from 'react';
import { Form, FieldInput, Label } from '../../components/inputs/item-forms';
import { Input } from '../../components/inputs/inputs';
import { ButtonSubmit } from '../../components/buttons/button-submit';
import { mailValidate } from '../../utils/validation';
import { InfoAlert } from '../../utils/alertas';

const PassForm = (props) => {


    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState(false)
    const handleChange = (e) => setEmail(e.target.value)
    const validate = (e) => setError( mailValidate(e.target) )

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(email === ''){
            InfoAlert('Asegurate de escribir tu correo')
            return;
        }
        if(error === false){
            InfoAlert('Asegurate de que el formato de correo sea valido')
            return;
        }

        const mailSend = {
            email: email
        }

        console.log(mailSend)
    }

    return (
        <Form onChange={validate} onSubmit={handleSubmit}>
            <FieldInput>

                <Label>Ingresa tu correo electrónico</Label>
                <Input  type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        />

            </FieldInput>
            <FieldInput>
                <ButtonSubmit>Enviar</ButtonSubmit>
            </FieldInput>
        </Form>
    );
};

export default PassForm;