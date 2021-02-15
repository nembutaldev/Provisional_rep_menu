import React from 'react';
import { Form, FieldInput, Label } from '../../../../components/inputs/item-forms';
import { Input } from '../../../../components/inputs/inputs';
import { ButtonSubmit } from '../../../../components/buttons/button-submit';
import { InfoAlert, SuccesAlert } from '../../../../utils/alertas';
import { PostMethod } from '../../../../utils/peticiones';
import SpinerForm from '../../../../components/spiners/spiner-form';


const initialState = {
    new_password:'',
    old_password:'',
    repeat_newPass : ''
}


const PerfilPassword = (props) => {
    //console.log('CONTRASEÑACONTRASEÑA',)

    const ideUser = props.sesion.user.id_user
    const token = props.sesion.token
    const [pass, setPass] = React.useState(initialState)
    const [load, setLoad] = React.useState(false)



    const onChange = (e) =>{
        const {target:{name, value}} = e
        setPass({...pass, [name]:value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoad(true)
        if(pass.new_password !== pass.repeat_newPass){
            InfoAlert('Las nuevas contraseñas no coinciden')
            setLoad(false)
            return;
        }
        const newPass = {
            new_password:pass.new_password,
            old_password:pass.old_password
        }

        const result = await PostMethod(newPass,`api/users/profile/passwords/${ideUser}`, {Authorization:'Bearer ' + token})
        if(result.ok){
            SuccesAlert('La contraseña se cambio con éxito')
            setPass(initialState)
            setLoad(false)
        }else{
            //console.log(result.response)
            setLoad(false)
            InfoAlert('Tu contraseña actual es incorrecta')
        }
        //console.log(result)


    }

    return (
        
            <Form onSubmit={handleSubmit}>
                <FieldInput>
                    <Label>Vieja contraseña</Label>
                    <Input  type="password"
                            name="old_password"
                            onChange={onChange}
                            placeholder="Escribe tu contraseña actual"
                            />
                </FieldInput>

                <FieldInput>
                    <Label>Nueva contraseña</Label>
                    <Input  type="password"
                            name="new_password"
                            onChange={onChange}
                            placeholder="Escribe una nueva contraseña"
                            />
                </FieldInput>

                <FieldInput>
                    <Label>Repetir nueva contraseña</Label>
                    <Input  type="password"
                            name="repeat_newPass"
                            onChange={onChange}
                            placeholder="Repite la nueva contraseña"
                            />
                </FieldInput>

                <FieldInput>
                    {
                        load
                        ?
                            <SpinerForm/>
                        :
                            <ButtonSubmit margin>Cambiar contraseña</ButtonSubmit>
                    }
                </FieldInput>

            </Form> 
        
    );
};

export default PerfilPassword;