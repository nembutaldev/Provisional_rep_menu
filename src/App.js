import React,{Suspense} from 'react';
import { Switch } from 'react-router-dom'
import { Routes } from './routes/routes';
import Carga from './layout/carga/carga';
import { connect } from 'react-redux'
import Ruta from './routes/ruta';



var user = JSON.parse(localStorage.getItem('user'))


const App = (props) => {
  
  //console.log('%c->APPRUTAS', 'color:sienna', props)

     if(user){
       props.reanudarSesion(user)
     }

    return (

      <Suspense fallback={<Carga/>}>
          
      <Switch>
                      
          {
            Routes.map((route, i)=>{
              return <Ruta  key={i}
                            {...route}
                            {...user}
                            logout={props.cerrarSesion}
                            cleanSucursales={props.cleanSucursales}
                            />
            })
          }
              
      </Switch> 
      </Suspense>
    );
  
};





//---------->REDUX
const mapStateToProps = (state) => {
  return {
    sesion: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reanudarSesion: (data) => {
      dispatch({
        type:'LOGIN', data:data
      })
    },
    cerrarSesion: () =>{
      user = null;
      localStorage.removeItem('user');
      dispatch({type:'LOGOUT'});
    },
    cleanSucursales: () =>{
      dispatch({type:'CLEAN_RESTAURANTS'})
    },
    
  }
}

//---------->REDUX
export default connect(mapStateToProps, mapDispatchToProps)(App)




