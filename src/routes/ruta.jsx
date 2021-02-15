import React from 'react';
import {Route} from 'react-router-dom'



const Ruta = (route) => {
    
    //console.log('RUTAS',route)
    return (
        
        <Route  path={route.path}
                exact={route.exact}
                render={(props)=> <route.component  {...props}
                                                    logout={route.logout}
                                                    subroutes={route.subroutes}
                                                    />}
        />
        
    );
};



export default Ruta;
