import React from 'react';
import { Form, FieldInput, Label } from '../../components/inputs/item-forms';
import { Input } from '../../components/inputs/inputs';
import { ButtonSubmit } from '../../components/buttons/button-submit';
import InputPass from '../../components/inputs/input_pass/input_pass';
import { mailValidate } from '../../utils/validation';
import { InfoAlert, ErrorAlert, SuccesAlert } from '../../utils/alertas';
import { PostMethod } from '../../utils/peticiones';
import SpinerForm from '../../components/spiners/spiner-form';
import {connect} from 'react-redux'


const LoginForm = (props) => {
    //console.log(props)
    const [error, setError] = React.useState({e_email:false})
    const [load, setLoad] = React.useState(false)
    const [login, setLogin] = React.useState({ email:'', password:''})


    const handleChange = (e) =>{
        const {target:{name, value}} = e
        setLogin({ ...login, [name]:value })
    }
    const validation = (e) =>{
        if(e.target.name === 'email'){
            setError({...error, e_email: mailValidate(e.target)})
        }
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        setLoad(true)
        if(error.e_email === false || login.email === '' || login.password === ''){
            InfoAlert('Asegurate de llenar correctamente todos los campos');
            setLoad(false)
            return;
        }

        //Aqui va la peticion
        const result = await PostMethod(login, 'api/login');
        //console.log('%c->LOGIN', 'color:sienna', result);
        if(result.ok){
            console.log(result.response.data)
            SuccesAlert('Sesion iniciada');
            setLoad(false);
            props.iniciarSesion(result.response.data);
            localStorage.setItem('user', JSON.stringify(result.response.data))
            props.history.push('/dashboard');
        }else{
            ErrorAlert(result.response.data.message);
            setLoad(false);
        };
    }

    return (
        <Form onChange={handleChange} onSubmit={handleSubmit}>

            <FieldInput>
                <Label>Usuario</Label>
                <Input  type="email"
                        name="email"
                        placeholder="ejemplo@algo.com"
                        onChange={validation}
                        />
            </FieldInput>


            <FieldInput>
                <Label>Contraseña</Label>
                <InputPass  name="password"
                            onChange={validation}/>

            </FieldInput>

            
            {
                    load
                ?
                    <SpinerForm/>
                :
                    <ButtonSubmit margin>Continuar</ButtonSubmit>
            }

        </Form>
    );
};



//----------------------> REDUX
const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        iniciarSesion: (data) => {
            dispatch({type:'LOGIN', data:data})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
