import React from 'react';
import { CenterElement, WidthCaja } from '../components/containers/containers';
import SignUpForm from '../views/signup/signup-form';
import TitleSubtitle from '../components/titles/title-sibtitle';
import ImgSup from '../components/titles/img-sup';
import CircleLogo from '../assets/img/circle-logo.png'
import FooterForm from '../components/footers/footer-form';
import { Link } from 'react-router-dom'
import FooterRedes from '../components/footers/footer-redes';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'



const SignUp = (props) => {

    //console.log('REGSTRO',props)

    React.useEffect(()=>{window.scrollTo(0,0)},[])

    if(props.sesion !== null){
        return <Redirect to="/dashboard"/>
    }
    
    


    return (
        <CenterElement>
            <WidthCaja flow="column">


                <ImgSup img={CircleLogo} ruta="/" imgWidth="150px"/>

                <TitleSubtitle
                        center
                        title="!Crea tú cuenta, es gratis!"
                        subtitle=" y lleva tu restaurante a la vanguardia digital"
                />
                

                {/* ------------->>ESTE ES EL FPRMULARIO */}

                    <SignUpForm {...props}/>

                {/* ------------->>ESTE ES EL FPRMULARIO */}




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



//--------------------> REDUX

const mapStateToProps = (state) => {
    return {
        sesion: state.login
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);