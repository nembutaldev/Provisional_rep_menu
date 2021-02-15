import React from 'react';
import ItemDay from '../items/item-day';
import { Form } from '../../../../components/inputs/item-forms';
import BartopForm from '../../../../components/bartop/bartop-form';
import { ButtonSubmit } from '../../../../components/buttons/button-submit';
import { ButtonText } from '../../../../components/buttons/button-text';
import { InfoAlert } from '../../../../utils/alertas';




const days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']

const StepTwo = (props) => {

    //console.log(props)
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const dias = props.sucursal.days
        const mapDias = Object.entries(dias).map(([id, dia]) => dia.enable)
        const encontrar = mapDias.filter(dia => dia === true)

        if(encontrar.length === 0){
            InfoAlert('Agrega al menos un dia')
            return
        }
        //console.log(encontrar.length)
        //console.log('%cBATMAN', 'color:hotpink', mapDias, encontrar)
        props.nextStep();
    }

    return (

        <Form border onSubmit={handleSubmit}>
            <BartopForm icon="fas fa-store"
                        title="Días y horarios"
                        subtitle="que días esta abierto este restaurante (formato de horas)"
                        />


            {
                days.map((day, i) =>{
                    return <ItemDay i={i}
                                    key={i}
                                    day={day}
                                    handleChecked={props.handleChecked}
                                    handleTime={props.handleTime}
                                    {...props}
                                    />
                })
            }
            <ButtonSubmit margin>Siguiente</ButtonSubmit>
            <ButtonText onClick={props.prevStep}><span>Anterior</span></ButtonText>
        </Form>            
        
    );
};

export default StepTwo;