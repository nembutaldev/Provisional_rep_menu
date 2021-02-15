import React from 'react';
import Recaptcha from 'react-recaptcha';
import { Form, FieldInput, Label } from '../../components/inputs/item-forms';
import { Input } from '../../components/inputs/inputs';
import { ButtonSubmit } from '../../components/buttons/button-submit';
import {Split} from '../../components/containers/containers'
import { minLength, mailValidate, numberPhone } from '../../utils/validation';
import { InfoAlert, SuccesAlert, ErrorAlert } from '../../utils/alertas';
import { PostMethod } from '../../utils/peticiones';
import SpinerForm from '../../components/spiners/spiner-form';
import {parsePhoneNumber, isValidPhoneNumber} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { connect } from 'react-redux';
import InputPhone from '../../components/inputs/input_phone/input-phone';




const SignUpForm = (props) => {

    //console.log('%c->PROPS DE SIGNUP', 'color:fuchsia', props)

    const [verified, setVerified] = React.useState(false)
    const [load, setLoad] = React.useState(false);
    const [error, setError] = React.useState({
        e_name:false,
        e_email:false,
        e_telephone:false,
        e_password:false,
    })
    const [ register, setRegister] = React.useState({
        name:'',
        email:'',
        telephone:'',
        password:'',
        repeatPassword:'',
        country:'',
        phoneValidate:true
    })
    

    const handleChange = (e) =>{
        const {target : {name, value}} = e
        setRegister({...register, [name]: value})
    }


    // ------->  FUNCIONES DEL CAPTCHA
        const handleCaptcha = () =>{
        }

        const verifyCallaback = (response) =>{
            if(response){
                setVerified(true)
            }
        }

        const expired = () =>{
            setVerified(false)
        }
    // ------->  FUNCIONES DEL CAPTCHA


    const validation = (e) =>{
        if(e.target.name === 'name'){
            setError({...error, e_name:minLength(e.target, 6)})
            
        }
        if(e.target.name === 'telephone'){
            
            //setError({...error, e_telephone:numberPhone(e.target, 10)})
        }
        if(e.target.name === 'email'){
            setError({...error, e_email:mailValidate(e.target)})
        }
        if(e.target.name === 'password' || e.target.name === 'repeatPassword' ){
            setError({...error, e_password:minLength(e.target, 6)})
        }
    }

    const setPhone = (phone) =>{

        const valor = phone

        if(valor){
            const numero = parsePhoneNumber(valor)
            if(numero === undefined){
                console.log('no hay numero')
            }else{
                setRegister({
                    ...register,
                    telephone: numero.number,
                    country: numero.country,
                    phoneValidate:isValidPhoneNumber(numero.number.toString())
                })
                console.log('si hay numero')
            }
            //console.log(numero)
        }
    }


    const handleSubmit = async e =>{
        e.preventDefault();
        setLoad(true)
        if(!error.e_name || !error.e_email ||  !error.e_password ){
            InfoAlert('Asegurate de llenar correctamente todos los campos');
            setLoad(false)
            return;
        }
        if(register.telephone === ''){
            InfoAlert('Asegurate de incluir tu número de whatsapp')
            setLoad(false)
            return;
        }
        if(register.phoneValidate === false){
            InfoAlert('Asegurate de escribir correctamente tu número de whatsapp')
            setLoad(false)
            return;
        }
        if(!verified){
            InfoAlert('Comprueba el captcha')
            setLoad(false)
            return;
        }
        if(register.password !== register.repeatPassword){
            InfoAlert('Las contraseñas no coinciden');
            setLoad(false)
            return;
        }
        // AGREGAR EL NUMERO UNO AL NUMERO DE MÉXICO
        if(register.country === 'MX'){
            const number = register.telephone
            const arrayNumber = number.split("")
            arrayNumber.splice(3, 0, '1')
            const resultNumber = arrayNumber.join('')
            var newUser={
                name: register.name,
                email: register.email,
                telephone: resultNumber,
                password:register.password,
            }
        }else{
            var newUser={
                name: register.name,
                email: register.email,
                telephone: register.telephone,
                password:register.password,
            }
        }


        console.log(newUser)
        
        const result = await PostMethod(newUser, 'api/signup')
        if(result.ok){
            console.log('TOKENSITO',result.response.data);
             const newUser = {
                 data:result.response.data,
                 pass:register.password
             }
            console.log(result.response.data)
            setLoad(false);
            props.signUpDispatch(newUser);
            //localStorage.setItem('user', JSON.stringify(result.response.data));
            props.history.push('/verify')
        }else{
            //console.log(result);
            ErrorAlert(result.response.data.message);
            //console.log(result.response.data.message)
            setLoad(false);
        } 
    }

    

    
    //console.log(verified);
    
    
    return (
        <Form onChange={handleChange} onSubmit={handleSubmit}>


            <FieldInput>
                <Label>Tu nombre:</Label>
                <Input  type="text"
                        name="name"
                        placeholder="Escribe tu nombre"
                        onChange={validation}
                        />
                        
            </FieldInput>

            <FieldInput>
                <Label>Tu correo:</Label>
                <Input  type="email"
                        name="email"
                        placeholder="ejemplo@algo.com"
                        onChange={validation}
                        />
               
            </FieldInput>

            {/* <FieldInput>
                <Label>Tu whatsapp:</Label>
                <Input  type="tel"
                        name="telephone"
                        max="10"
                        placeholder="Este campo solo acepta números"
                        onChange={validation}
                        />
                
            </FieldInput> */}


            {/* WIP:IMPLEMENTAR VERIFICACION DE PAIS EN TELEFONO */}

            <FieldInput>
                <Label>Tu whatsapp</Label>
            
                <InputPhone     valor={register.telephone}
                                onChange={setPhone}
                                phoneValidate={register.phoneValidate}
                                />
                               

            </FieldInput>

            {/* WIP:IMPLEMENTAR VERIFICACION DE PAIS EN TELEFONO */}



        <Split>
            <FieldInput maxWidth="45%">
                <Label>Contraseña:</Label>
                <Input  type="password"
                        name="password"
                        placeholder="Mínimo 6 carácteres"
                        onChange={validation}
                        />
            </FieldInput>


            <FieldInput maxWidth="45%">
                <Label>Repetir contraseña:</Label>
                <Input  type="password"
                        name="repeatPassword"
                        onChange={validation}
                        />
            </FieldInput>
        </Split>





        {/* ESTE ES EL CAPTCHA */}

            <section style={{
                display:'flex',
                justifyContent:'center',
                padding:'20px 0px',
            }}>
                <Recaptcha
                sitekey="6Lf_q6UZAAAAAGbXQWR4PTinF_PPiPVt-3e8WSVn"
                render="explicit"
                onloadCallback={handleCaptcha}
                verifyCallback={verifyCallaback}
                expiredCallback={expired}
                />
            </section>

        {/* ESTE ES EL CAPTCHA */}
        {load
            ?
                <SpinerForm/>
            :   
                <ButtonSubmit   disabled={verified ? false : true}
                                style={{
                                    background:verified ? null : '#ccc'
                                }}
                                >
                    Crear cuenta
                </ButtonSubmit>
        }

        
        
        </Form>
    );
};




//------>REDUX


const mapStateToProps = (state) => {
    return {
        registro: state.register,
        sesion: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUpDispatch: (data) => {
            dispatch({
                type:'REGISTER_USER', data:data
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)