import React from 'react';
import {connect} from 'react-redux'
import { PostMethod } from '../../utils/peticiones';
import { InfoAlert, ErrorAlert } from '../../utils/alertas';
import {Redirect} from 'react-router-dom'
import { Form, FieldInput, VerifyContainer } from '../../components/inputs/item-forms';
import { WidthCaja, CenterElement, Split } from '../../components/containers/containers';
import { ButtonSubmit } from '../../components/buttons/button-submit';
import SpinerForm from '../../components/spiners/spiner-form';
import ReactCodeInput from 'react-code-input'



const VerifyForm = (props) => {
     

    const [token, setToken] = React.useState('')
    
    const [cargando, setCargando] = React.useState(false)
    

    const handleSubmit = async (e) =>{
        setCargando(true)
        e.preventDefault();
        
        const pass = props.registro.pass
        const email = props.registro.data.user.email
        const code = token
        
        const verify = {
            password: pass,
            email: email,
            token:code
        }
        console.log(verify)

        const result = await PostMethod(verify,'api/verify_acount')
        if(result.ok){
            console.log(result.response.data)
            localStorage.setItem('user', JSON.stringify(result.response.data))
            props.loginUser(result.response.data);
            props.history.push('/dashboard')
            props.cleanRegister()
            setCargando(false)
        }else{
            ErrorAlert('Algo salio mal')
            setCargando(false)
        }
        

    }

    const handleChange = (value) =>{
        setToken(value)
    }

    

     

    if(props.registro === null){
       return <Redirect to="/signup"/>
    }

    return (
        <CenterElement>
        <WidthCaja maxWidth="500px" flow="column">
       


        <Form onSubmit={handleSubmit} border maxWidth="400px">


            <FieldInput>
                <h1
                    style={{fontSize:'1.5rem', fontFamily:'Bold', margin:'auto'}}
                    >Verifica tu cuenta</h1>
                <p
                    style={{color:'var(--colordos)', fontFamily:'Light', margin:'auto'}}
                    >Ingresa el código de 4 dígitos
                </p>
            </FieldInput>

            <FieldInput>

                <VerifyContainer>

                {/* TODO: IMPLEMENTAR CODIGO DE VERIFICACION */}

                    <ReactCodeInput type='number' fields={4} onChange={handleChange} />

                {/* TODO: IMPLEMENTAR CODIGO DE VERIFICACION */}

                </VerifyContainer>
                
            </FieldInput>

            <FieldInput>
                {cargando ? <SpinerForm/> : <ButtonSubmit>Verificar número</ButtonSubmit> }
            </FieldInput>


        </Form>
        
        </WidthCaja>
        
        </CenterElement>
    );
};


//REDUX------->
const mapStateToProps = (state, ownProps) => {
    return {
        registro: state.register
    }
}
const mapDispatchToProps = (dispatch, ) => {
    return {
        cleanRegister: () => {
            dispatch({type:'CLEAN_REGISTER'})
        },
        loginUser:(data) =>{
            dispatch({type:'LOGIN', data:data})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(VerifyForm)
