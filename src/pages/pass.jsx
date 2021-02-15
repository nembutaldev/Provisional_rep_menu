import React from 'react';
import { CenterElement, WidthCaja } from '../components/containers/containers';
import ImgSup from '../components/titles/img-sup';
import CircleLogo from '../assets/img/circle-logo.png'
import TitleSubtitle from '../components/titles/title-sibtitle';
import FooterRedes from '../components/footers/footer-redes';
import FooterForm from '../components/footers/footer-form';
import { Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import PassForm from '../views/pass-form/pass-form';




const Pass = (props) => {


    React.useEffect(() =>{ window.scrollTo(0,0); },[])
    if(props.sesion !== null){ return <Redirect to="/dashboard"/> }




    return (

        <CenterElement>
        <WidthCaja flow="Column">

            <ImgSup img={CircleLogo} ruta="/" imgWidth="150px"/>

            <TitleSubtitle
                            center
                            title="Restablece tu contraseña"
                            subtitle="Te enviaremos instrucciones"
                            />



            {/* --------->FORMULARIO DE RECUPERACIÓN */}

            <PassForm {...props}/>

            {/* --------->FORMULARIO DE RECUPERACIÓN */}





            <FooterForm     left="¿Ya tienes una cuenta?"
                            right={
                                <Link to="/login">Inicia sesión</Link>
                            }
                            />




            <FooterRedes/>


        </WidthCaja>
        </CenterElement>

    );
};

// ------------------>REDUX

const mapStateToProps = (state) => {
    return {
        sesion: state.login
    }
}

export default connect(mapStateToProps)(Pass)
