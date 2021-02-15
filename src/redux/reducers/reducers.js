import { combineReducers } from 'redux'
import { LoginUser, GetSucursales, MenuItem, MenuSection, MenuObject, GetMenus, GetProfile, RegisterUser, MenuProduct } from './reducer_function';


export const reducer = combineReducers({
        login: LoginUser,
        sucursales: GetSucursales,
        menu: MenuItem,
        menuSection: MenuSection,
        menuProduct:MenuProduct,
        menuObject: MenuObject,
        menuLista: GetMenus,
        profile:GetProfile,
        register: RegisterUser
});