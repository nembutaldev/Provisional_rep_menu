import React from 'react';
import FirstBranchOffice from '../../../views/auth/multiform/first-branchoffice';
import {connect} from 'react-redux';
import { GetMethod } from '../../../utils/peticiones';
import {Redirect} from 'react-router-dom'
import CargandoTxt from '../../../components/spiners/cargando-txt';



const FirstSesion = (props) => {

    

    const idUser = props.sesion.user.id_user
    const token = props.sesion.token
    const [list, setList] = React.useState([])
    const [load, setLoad] = React.useState(true);
    React.useEffect(()=>{
        const getRestaurants = async () =>{
            const result = await GetMethod(`api/users/restaurants/${idUser}`, {Authorization:'Bearer ' + token});
            console.log(result)
             if(result.ok){
                 setList(result.response.data.data.restaurants)
                 setLoad(false)
             }else{
                 setLoad(false)
             }
        }
        getRestaurants();
    },[idUser, token])

     


    if(load){

        return <CargandoTxt/>


    }else{
        
        if(list.length !== 0){
            return <Redirect to="/dashboard"/>
        }

        return (
        
            <FirstBranchOffice {...props}/>
            
        );

    }

};






//REDUX----------->


const mapStateToProps = (state) => {
    return {
        sesion: state.login
    }
}
export default connect(mapStateToProps)(FirstSesion)