import { lazy } from 'react';
import Error404 from '../views/error/error404';
import ItemBranchoffice from '../pages/auth/branchoffice/item-branchoffice';
import PerfilEditar from '../views/auth/perfil/items/perfil-editar';
import VerifyForm from '../views/signup/verify-form';
import EditRestaurant from '../views/edit_restaurant/edit_restaurant';



// Aqui se importan los componentes que cargan con Lazy ->

const Home = lazy(()=> import ('../pages/home'));
const SignUp = lazy(() => import('../pages/signup'));
const Login = lazy(() => import('../pages/login'));
const Dashboard = lazy(() => import('../pages/auth/dashboard'));
const ListBranchOffice = lazy(() => import('../pages/auth/branchoffice/list_branchoffice'));
const FirstSesion = lazy(() => import('../pages/auth/first-branchoffice/firts_sesion'));
const NewRestaurant = lazy(() => import ('../views/new_restaurant/new_restaurant'))
const Perfil = lazy(() => import('../pages/auth/perfil/perfil'));
const Pass = lazy(() => import('../pages/pass'))
// Arreglo con rutas ->import CreateProduct from '../pages/auth/menu-editar/forms/create-product';





export const Routes = [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/signup',
        component:SignUp,
        exact:true
    },{
        path:'/verify',
        component:VerifyForm,
        exact:true
    },
    {
        path:'/login',
        component:Login,
        exact:true
    },
    {
        path:'/pass',
        component:Pass,
        exact:true
    },
    {
        path:'/dashboard',
        component:Dashboard,
        exact:false,
        subroutes:[
            {
                path:'/dashboard',
                component:ListBranchOffice,
                exact:true,
            },
            {
                path:'/dashboard/first',
                component:FirstSesion,
                exact:true
            },
            {
                path:'/dashboard/nuevasucursal',
                component:NewRestaurant,
                exact:true
            },
            {
                path:'/dashboard/sucursal/:id',
                component:ItemBranchoffice,
                exact:true
            },
            {
                path:'/dashboard/sucursal/:id/editar',
                component:EditRestaurant,
                exact:true
            },
            {
                path:'/dashboard/perfil',
                component:Perfil,
                exact:false,
                subroutes:[
                    {
                        path:'/dashboard/perfil/editar',
                        component:PerfilEditar,
                        exact:true
                    }
                ]
            },
            {
                component:Error404
            }
        ]
    },
    
    {
        component:Error404
    }
]