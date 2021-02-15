import React from 'react';
import { Form, FieldInput, Label } from '../../../../components/inputs/item-forms';
import BartopForm from '../../../../components/bartop/bartop-form';
import { Input } from '../../../../components/inputs/inputs';
import { ButtonSubmit } from '../../../../components/buttons/button-submit';
import { ButtonText } from '../../../../components/buttons/button-text';
import { webValidate, faceValidate, instaValidate, mailValidate } from '../../../../utils/validation';
import { InfoAlert } from '../../../../utils/alertas';
import InputItem from '../../../../components/inputs/input_item/input-item';




const StepThree = (props) => {

    console.log(props)
    
    const {sucursal} = props
    const {website, facebook, instagram, email } = props.sucursal
    const {error, setError} = props
    
    //console.log('THIRD', props.handleChange)
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(website !== ''){
            if(!error.e_website){
                InfoAlert('Asegurate de poner el formato correcto de la URL o deja el campo vacio')
                return;
            }
            
        }
        if(facebook !== ''){
             //console.log('no esta vacio facebook')
             
        }

        if(instagram !== ''){
            //console.log('no esta vacio instagram')
        }

        if(email !== ''){
            if(!error.e_email){
                InfoAlert('Asegurate de poner el formato correcto de EMAIL o deja el campo vacio')
                return;
            }
        }
        //console.log('todo ok')
        //console.log(url.test(key))
        props.nextStep()
        //props.nextStep();
    }

    const validation = (e) =>{
         if(e.target.name === 'website'){
            const result = webValidate(e.target)
            setError({...error, e_website: result})
            //console.log(result)
         }
        
         if(e.target.name === 'email'){
             const result = mailValidate(e.target)
             setError({...error, e_email: result})
         }
    }


    return (
        <Form border onSubmit={handleSubmit} onChange={validation}>

            <BartopForm     title="Información de redes sociales"
                            subtitle="ingresa la indformación (opcional)"
                            icon="fas fa-store"
                            />

            <FieldInput>
                <Label>¿Tiene página web?(sin diagonales)</Label>
                <InputItem  onChange={props.handleChange}
                            name="website"
                            value={sucursal.website}
                            placeholder="dominio (no agregues diagonales)"
                            defaulttxt="http(s)://"
                            padding="10px 10px 10px 70px"
                            />
            </FieldInput>


            <FieldInput>
                <Label>¿Tiene página de facebook?</Label>
                <InputItem  onChange={props.handleChange}
                            name="facebook"
                            value={sucursal.facebook}
                            placeholder="usuario"
                            defaulttxt="http://www.facebook.com/"
                            />
            </FieldInput>

            <FieldInput>
                <Label>¿Tiene perfil de instagram?</Label>
                <InputItem  onChange={props.handleChange}
                            name="instagram"
                            value={sucursal.instagram}
                            placeholder="usuario"
                            defaulttxt="http://www.instagram.com/"
                            />
            </FieldInput>

            

            <FieldInput>
                <Label>¿Cuenta con correo electrónico?</Label>
                <Input  onChange={props.handleChange}
                        name="email"
                        value={sucursal.email}
                        placeholder="Ejemplo: mi_correo@gmail.com"
                        />
            </FieldInput>

            <ButtonSubmit margin>Siguiente</ButtonSubmit>
            <ButtonText onClick={props.prevStep}><span>Anterior</span></ButtonText>

        </Form>
    );
};

export default StepThree;