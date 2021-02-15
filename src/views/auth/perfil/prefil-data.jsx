import React from 'react';
import { CenterTop, WidthCaja } from '../../../components/containers/containers';
import BartopList from '../../../components/bartop/bartop-list';
import PerfilPassword from './items/perfil-password';
import { CardProfile } from './styles/styles-profile';




const PerfilData = (props) => {

    //console.log('%c->PERFIL', 'color:hotpink', props)
    const {name, email, telephone } = props.perfil
    
    return (
        <CenterTop>
        <WidthCaja maxWidth="400px" flow="column">
            <BartopList icon="fas fa-user"
                        title="Mi perfil"
                        ruta="/dashboard/perfil/editar"
                        btntxt="editar"
                        btnicon="fas fa-tools"
                        />
        <CardProfile>
            <section>
                <div><i className="fas fa-user-alt"></i></div>
                <div>
                    <h1>{name}</h1>
                    <p>Gerente</p>
                </div>
            </section>


            <section>
                <div><i className="fas fa-envelope-open-text"></i></div>
                <div>
                    <h1>{email}</h1>
                    <p>email</p>
                </div>
            </section>

            <section>
                <div><i className="fab fa-whatsapp"></i></div>
                <div>
                    <h1>{telephone}</h1>
                    <p>Whatsapp</p>
                </div>
            </section>
        </CardProfile>
           

            <PerfilPassword {...props}/>
        </WidthCaja>
        </CenterTop>
            
    );



    
};




//-------> REDUX


export default PerfilData;
