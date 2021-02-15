import React from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import BarTop from '../../components/bartop/bartop';
import { Switch, Route } from 'react-router-dom'
import { GetMethod } from '../../utils/peticiones';
import CargandoTxt from '../../components/spiners/cargando-txt';
import { ErrorAlert } from '../../utils/alertas';


const Dashboard = (props) => {
    
    //console.log('DESLOGUEAR', props)
    const {subroutes} = props
    const [load, setLoad] = React.useState(true);

    React.useEffect(() =>{
        if(props.sesion !== null){

        const idUser = props.sesion.user.id_user
        const token = props.sesion.token
        
          const getRestaurants = async () =>{
              //console.log('HUEVOS----->')
              const result = await GetMethod(`api/users/restaurants/${idUser}`,{Authorization:'Bearer ' + token} );
              if(result.ok){
                  //console.log(result.response.data.data.restaurants)
                  props.getRestaurants(result.response.data.data.restaurants)
                  setLoad(!result.ok)
              }else{
                  console.log('Desloguear aqui',result.response)
                  if(result.response.status === 401){
                      ErrorAlert('Tu sesión ha caducado, vuelve a iniciar sesión')
                      props.logout();
                  }
                  setLoad(false)
              }
          }
          getRestaurants();
            
           
        }else{
            setLoad(false)
        }
        //return () =>{props.cleanRestaurantes()}
    },[props])

    if(load){
        // if(props.sesion === null){
        //     return <Redirect to="/login"/>
        // }
        return <CargandoTxt/>

    }else{

    

    if(props.sesion === null){ 
        return <Redirect to="/login"/>
    }
       

    return (
        <>  
            
            <BarTop user={props.sesion} {...props}/>
            <Switch>
                {
                    subroutes.map((subroute, i) =>{
                        
                        return <Route   key={i}
                                        path={subroute.path}
                                        exact={subroute.exact}
                                        
                                        render={(props) => <subroute.component {...props} subroutes={subroute.subroutes}/>}
                                        />
                    })
                }
            </Switch>
        </>
    );
}
};





//REDUX--------->

const mapStateToProps = (state) => {
    return {
        sesion: state.login
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurants: (data) => {
            dispatch({type:'GET_RESTAURANTS', data: data})
        },
        cleanRestaurantes:() =>{
            dispatch({type:'CLEAN_RESTAURANTS'})
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
