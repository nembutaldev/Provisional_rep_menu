import React from 'react';
import Modal from '../../../../components/modales/modal';
import { Form, FieldInput, Label } from '../../../../components/inputs/item-forms';
import { Input } from '../../../../components/inputs/inputs';
import { ButtonSubmit } from '../../../../components/buttons/button-submit';
import {connect} from 'react-redux'
import { PutMethod } from '../../../../utils/peticiones';
import { SuccesAlert } from '../../../../utils/alertas';



const PerfilEditar = (props) => {
    //console.log('MODAL PROPS', props)
    
    const token = props.sesion.token
    const {id_user} = props.sesion.user
    const [flag, setFlag] = React.useState(false)
    const initialState = { name:'', telephone:'', email:'' }
    const [profile, setProfile] = React.useState(initialState)
    

    React.useEffect(() =>{
        setFlag(true)
        setProfile({
            name:props.perfil.name,
            email:props.perfil.email,
            telephone:props.perfil.telephone
        })
    },[props])



    const flagModal = () =>{
        setFlag(!flag)
        props.history.push('/dashboard/perfil')
    }

    const handleChange = (e) =>{
        const {target:{name,value}} = e
        setProfile({...profile, [name]:value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProfile = { name:profile.name, email: profile.email, telephone: profile.telephone }

        const result = await PutMethod( newProfile, `api/users/profile/${id_user}`,{Authorization:'Bearer ' + token})
        console.log('RESPUESTA', result.response.data.data)
        if(result.ok){
            //props.cleanProfile()
            props.getProfile(result.response.data.data);
            flagModal()
            SuccesAlert('Actualizado')
        }
    }

   
    return (
        <>
            <Modal toggle={flag} toggleModal={flagModal}>
               <Form onSubmit={handleSubmit}>

                    <FieldInput>
                        <Label>Nombre:</Label>
                        <Input  placeholder="Nombre"
                                value={profile.name}
                                name="name"
                                onChange={handleChange}
                                />
                    </FieldInput>

                    <FieldInput>
                        <Label>Correo:</Label>
                        <Input  placeholder="Email"
                                value={profile.email}
                                name="email"
                                onChange={handleChange}
                                />
                    </FieldInput>

                    <FieldInput>
                        <Label>Numero:</Label>
                        <Input  placeholder="Teléfono"
                                value={profile.telephone}
                                name="telephone"
                                onChange={handleChange}
                                />
                    </FieldInput>

                    <FieldInput>
                        <ButtonSubmit margin>Guardar</ButtonSubmit>
                    </FieldInput>

                </Form> 
            </Modal>
        </>
    );
};




//---------------------------_>REDUX


const mapStateToProps = (state) => {
    return {
        perfil: state.profile,
        sesion: state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (data) => {
            dispatch({type:'GET_PROFILE', data:data})
        },
        cleanProfile:()=>{
            dispatch({type:'CLEAN_PROFILE'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfilEditar)