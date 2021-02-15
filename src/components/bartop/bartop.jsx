import React from 'react';
import { BartopContainer, BarTopCaja } from './styles/bartop-styles';
import Logo from '../../assets/img/circle-logo.png'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { GetMethod } from '../../utils/peticiones';



const BarTop = (props) => {

    //console.log('SESIONBARRA', props);
    const token = props.sesion
    const {id_user} = props.sesion.user
    const {getProfile} = props
    const [load, setLoad] = React.useState(true)

    const cerrarSesion = () =>{
        props.logout();
        props.cleanRestaurantes();
        props.cleanProfile();
    }

    React.useEffect(() =>{
        const getUser = async () =>{
            const result = await GetMethod(`api/users/profile/${id_user}`, {Authorization:'Bearer ' + token})
            //console.log(result)
            if(result.ok){
                const user = result.response.data.data
                getProfile(user)
                setLoad(false)            
            }else{
                setLoad(false)            
                alert('algo salio mal')
            }
        }
        getUser()
    },[id_user, token,getProfile])

   

    if(load){
        return <p>...</p>
    }else{



        return (
            <BartopContainer>
            <BarTopCaja>
    
                <section className="left">
                    <div><Link to="/"><img src={Logo} alt=""/></Link></div>
                    <div><Link to="/"><h1>PopAdvise</h1></Link></div>
                </section>
    
    
    
                <section className="right">
                    
                        <div><p>Bienvenido: {props.perfil.name.split(' ')[0]}</p></div>
                    
                    <div>
                        <Link to="/dashboard">
                        {/* TO DO: Aqui va una ruta hacia el perfil  */}
                        <i className="fas fa-store"></i>
                        <span>Mis restaurantes</span>
                        </Link>
                    </div>
                    
                    <div>
                        <Link to="/dashboard/menus">
                        {/* TO DO: Aqui va una ruta hacia el perfil  */}
                        <i className="fas fa-utensils"></i>
                        <span>Menús</span>
                        </Link>
                    </div>
    
                    <div>
                        <Link to="/dashboard/perfil">
                        {/* TO DO: Aqui va una ruta hacia el perfil  */}
                        <i className="fas fa-user-circle"></i>
                        <span>Mi perfil</span>
                        </Link>
                    </div>
    
                    <div>
                        <button onClick={cerrarSesion}>
                        <i className="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
    
                </section>
    
            </BarTopCaja>
            </BartopContainer>
        );




    }

    
};


//------> REDUX
const mapStateToProps = (state) => {
    return {
        perfil: state.profile,
        sesion: state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        cleanProfile: () => {
            dispatch({type:'CLEAN_PROFILE'})
        },
        getProfile:(data)=>{
            dispatch({type:'GET_PROFILE', data:data})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BarTop)


