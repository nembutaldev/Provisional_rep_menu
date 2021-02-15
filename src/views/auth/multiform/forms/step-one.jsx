import React from 'react';
import { Form, FieldInput, Label } from '../../../../components/inputs/item-forms';
import { Input } from '../../../../components/inputs/inputs';
import InputGoogle from '../../../../components/inputs/input_location/input-google';
import InputSelect from '../../../../components/inputs/input_select/inputselect';
import { ButtonSubmit } from '../../../../components/buttons/button-submit';
import { SucursalCategories } from '../../../../utils/select-categories';
import BartopForm from '../../../../components/bartop/bartop-form';
import { InfoAlert } from '../../../../utils/alertas';
import { minLength, numberPhone } from '../../../../utils/validation';



const StepOne = (props) => {
    //console.log('PRIMER SUCURSAL',props)
    const {handleChange, nextStep, handleSelect} = props
    const {name, telephone, category, place} = props.sucursal
    const {error, setError} = props
   
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(!error.e_name){
            InfoAlert('Asegurate de poner un nombre a tu sucursal')
            return;
        }
        if(!error.e_telephone){
            InfoAlert('Asegurate de poner tu teléfono utilizando solo numeros')
            return;
        }

        if(place === ''){
            InfoAlert('Asegurate de poner una dirección')
            return;
        }
        if(category === ''){
            InfoAlert('Elige una categoría')
            return;
        }
        nextStep();
    }

    const validation = (e) =>{
        if(e.target.name === 'name'){
            let validation = minLength(e.target, 1)
            setError({...error, e_name: validation})
        }
        if(e.target.name === 'telephone'){
            let validation = numberPhone(e.target, 10)
            setError({...error, e_telephone: validation})
            console.log(validation)
        }
    }

    return (
        <Form border onSubmit={handleSubmit} onChange={validation}>
            
            <BartopForm     title={props.flag ? "Crea una nueva sucursal" : "No tienes ningun restaurante"}
                            subtitle={props.flag ? "nueva sucursal" : "¡Crea uno ahora!"}
                            icon="fas fa-store"/>

            <FieldInput>
                <Label>¿Cuál es el nombre de la sucursal?</Label>
                <Input  onChange={handleChange}
                        name="name"
                        value={name}
                        placeholder="Nombre"
                        />
            </FieldInput>

            <FieldInput>
                <Label>¿Cuál es el teléfono del restaurante?</Label>
                <Input  onChange={handleChange}
                        name="telephone"
                        value={telephone}
                        placeholder="teléfono"
                        min={10}
                        max={10}
                        />
                
            </FieldInput>

            <FieldInput>
                <Label>¿Cuál es la dirección del restaurante?</Label>
                <InputGoogle    handleSelect={handleSelect}
                                valor={place}/>
            </FieldInput>


            <FieldInput>
                <Label>Categoría</Label>
                <InputSelect    options={SucursalCategories}
                                name="category"
                                value={category}
                                default="Elige una categoría"
                                onChange={handleChange}/>
            </FieldInput>

            <ButtonSubmit margin>Siguiente</ButtonSubmit>

        </Form>
    );
};

export default StepOne;