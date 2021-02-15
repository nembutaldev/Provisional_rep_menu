import React from 'react';
import { Form } from '../../../../components/inputs/item-forms';
import BartopForm from '../../../../components/bartop/bartop-form';
import { ButtonSubmit } from '../../../../components/buttons/button-submit';
import { ButtonText } from '../../../../components/buttons/button-text';
import InputNumber from '../../../../components/inputs/input_number/input_number';
import SpinerForm from '../../../../components/spiners/spiner-form';
import { InfoAlert } from '../../../../utils/alertas';




const StepFive = (props) => {

    const {tables} = props.sucursal

     const handleSubmit = (e) =>{
        e.preventDefault();
        if(tables <= 0){
            InfoAlert('Agrega una cantidad mayor a cero')
            return;
        }
         //console.log(props)
         props.handleSubmit();
     }

    return (
        <Form border>
            <BartopForm     title="¿Cuántas mesa tiene este restaurante"
                            icon="fas fa-store"
                            />

            <InputNumber    valor={props.sucursal.tables}
                            name="tables"
                            onChange={props.handleChange}
                            addNumber={props.addNumber}
                            removeNumber={props.removeNumber}
                            />
            {props.load ?

                <SpinerForm/>

                :

                <>
                    <ButtonSubmit margin onClick={handleSubmit}>Guardar</ButtonSubmit>
                    <ButtonText onClick={props.prevStep}><span>Regresar</span></ButtonText>
                </>
                
            }
        </Form>
    );
};

export default StepFive;