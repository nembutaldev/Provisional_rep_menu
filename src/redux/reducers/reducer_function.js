
export const RegisterUser = (state = null, action) =>{
    var nuevoEstado = Object.assign({}, state)
    switch (action.type) {
        case 'REGISTER_USER':
            nuevoEstado = action.data
            return nuevoEstado
    
        case 'CLEAN_REGISTER':
            nuevoEstado = null
            return nuevoEstado

        default:
            return state;
    }
}


export const LoginUser = (state = null, action) =>{

        var nuevoEstado = Object.assign({}, state)

        switch (action.type) {
            case 'LOGIN':
                nuevoEstado = action.data;
                return nuevoEstado;
            
            case 'LOGOUT':
                nuevoEstado = null;
                return nuevoEstado;

            default:
                return state;
        };
        
};


export const MenuSection = (state = [], action) =>{
    var nuevoEstado = Object.assign({}, state)
    switch (action.type) {
        case 'ADD_SECTION':
            nuevoEstado = state.concat(action.data)
            return nuevoEstado

        case 'EDITAR_SECTION':
            nuevoEstado = action.data
            return nuevoEstado
        
        case 'CLEAN_SECTIONS':
            nuevoEstado = []
            return nuevoEstado
    
        default:
            return state;
    }
}

export const MenuProduct = (state = [], action) =>{
    var nuevoEstado = Object.assign({}, state)
    switch (action.type) {
        case 'ADD_PRODUCT':
            nuevoEstado = state.concat(action.data)
            return nuevoEstado
        
        case 'EDITAR_PRODUCT':
            nuevoEstado = action.data
            return nuevoEstado
    
        case 'CLEAN_PRODUCT':
            nuevoEstado = []
            return nuevoEstado

            
        default:
            return state;
    }
}
export const MenuObject = (state = [], action) =>{
    var nuevoEstado = Object.assign({}, state)
    switch (action.type) {
        case 'ADD_OBJECT':
            nuevoEstado = state.concat(action.data)
            return nuevoEstado
        
        case 'EDITAR_OBJECT':
            nuevoEstado = action.data
            return nuevoEstado
    
        case 'CLEAN_OBJECT':
            nuevoEstado = []
            return nuevoEstado

            
        default:
            return state;
    }
}

export const MenuItem = (state = null, action) =>{
    var nuevoEstado = Object.assign({}, state)

    switch (action.type) {
        case 'ADD_MENU':
            nuevoEstado = action.data;
            return nuevoEstado;
            

        case 'REMOVE_MENU':
            nuevoEstado = null
            return nuevoEstado;

        default:
            return state;
    }
}


export const GetSucursales = (state = [], action) =>{
    var nuevoEstado = Object.assign({}, state)
    switch (action.type) {
        case 'GET_RESTAURANTS':
            nuevoEstado = action.data
            return nuevoEstado
        
        case 'CLEAN_RESTAURANTS':
            nuevoEstado = []
            return nuevoEstado
        default:
            return state;
    }
}


export const GetMenus = (state = [], action)=>{
    var nuevoEstado = Object.assign({}, state)
    switch (action.type) {
        case 'GET_MENUS':
            nuevoEstado = action.data
            return nuevoEstado

        case 'CLEAN_MENUS':
            nuevoEstado = []
            return nuevoEstado

        default:
            return state;
    }
}


export const GetProfile = (state = null, action)=>{
    var nuevoEstado = Object.assign({}, state)
    switch (action.type) {
        case 'GET_PROFILE':
            nuevoEstado = action.data
            return nuevoEstado
        
        case 'CLEAN_PROFILE':
            nuevoEstado = null
            return nuevoEstado

        default:
            return state;
    }


}



