import React from 'react';
import { CenterElement, WidthCaja } from '../components/containers/containers';
import LoginForm from '../views/login/login-form';
import TitleSubtitle from '../components/titles/title-sibtitle';
import ImgSup from '../components/titles/img-sup';
import CircleLogo from '../assets/img/circle-logo.png'
import FooterForm from '../components/footers/footer-form';
import { Link } from 'react-router-dom';
import FooterRedes from '../components/footers/footer-redes';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'


const Login = (props) => {

    //console.log(props)
        React.useEffect(()=>{ window.scrollTo(0,0); },[])
        if(props.sesion !== null){ return <Redirect to="/dashboard"/> }
    //-----------------> RUTA PUBLICA

    



    return (
        <CenterElement>
            <WidthCaja flow="Column">

                <ImgSup img={CircleLogo} ruta="/" imgWidth="150px"/>

                <TitleSubtitle
                        center
                        title="¡Bienvenido de nuevo!"
                        subtitle="Ingresa a tu cuenta para acceder al panel"
                />
                {/* ESTE ES EL FORMULARIO DE LOGIN */}
                    <LoginForm {...props}/>
                {/* ESTE ES EL FORMULARIO DE LOGIN */}

                <FooterForm     left="¿No tienes cuenta?"
                                right={
                                        <Link to="/signup">Regístrate</Link>
                                        }
                                />
                <FooterForm     left="¿Olvidaste tu contraseña?"
                                right={
                                        <Link to="/pass">Restablecer</Link>
                                        }
                                />
                
                <FooterRedes/>

            </WidthCaja>
        </CenterElement>
    );
};



//REDUX ---------->
const mapStateToProps = (state) => {
    return {
        sesion: state.login
    }
}

export default connect(mapStateToProps)(Login)
