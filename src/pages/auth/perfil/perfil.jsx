import React from 'react';
import PerfilData from '../../../views/auth/perfil/prefil-data';
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import { GetMethod} from '../../../utils/peticiones';
import SpinerCharge from '../../../components/spiners/spiner-charge';




const Perfil = (props) => {

   //console.log('SUBRUTAS', props.subroutes.map(sub => sub.path))
    //console.log('PERFILKKKKKKKK', props)

    const token = props.sesion.token
    const {id_user} = props.sesion.user
    const [load, setLoad] = React.useState(true)
    const {getProfile} = props

    React.useEffect(() =>{
        const getUser = async () =>{
            const result = await GetMethod(`api/users/profile/${id_user}`, {Authorization:'Bearer ' + token})
            //console.log(result)
            if(result.ok){
                const user = result.response.data.data
                getProfile(user)
                setLoad(false)            
            }else{
                alert('algo salio mal')
            }
        }
        getUser()
    },[id_user, token,getProfile])


    


    if(load){
        return <SpinerCharge/>
    }else{

    

    return (
        <>
            <PerfilData {...props}/>
            
            <Switch>
                {
                    props.subroutes.map((sub, i) =>{
                        return <Route   key={i}
                                        path={sub.path}
                                        exact={sub.exact}
                                        render={(props) => <sub.component {...props} />}
                                        />
                    })
                }
            </Switch>


            

        </>
    );


    }
};




// ----------------------> REDUX

const mapStateToProps = (state) => {
    return {
        sesion: state.login,
        perfil: state.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: (data) => {
            dispatch({type:'GET_PROFILE', data:data})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Perfil)
