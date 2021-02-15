import React from 'react';
import FirstBranchoffice from '../auth/multiform/first-branchoffice';
import { GetMethod } from '../../utils/peticiones';
import {connect} from 'react-redux';
import SpinerCharge from '../../components/spiners/spiner-charge';
import {Redirect} from 'react-router-dom'

const NewRestaurant = (props) => {

    const idUser = props.sesion.user.id_user
    const token = props.sesion.token
    const [list, setList] = React.useState([]);
    const [load, setLoad] = React.useState(true);
    const [flag, setFlag] = React.useState(false);
    
    React.useEffect(() =>{
         const getRestorants = async () =>{
             const result = await GetMethod(`api/users/restaurants/${idUser}`, {Authorization:'Bearer ' + token});
             //console.log(result.ok)
             //console.log(result.response.data.data.restaurants);
             if(result.ok){
                 setList(result.response.data.data.restaurants)
                 setLoad(false)
                 if(result.response.data.data.restaurants.length !== 0){
                     setFlag(true)
                 }
             }else{
                 setLoad(false)
             }
         }
         getRestorants();

    },[idUser, token])


    if(load){

        return <SpinerCharge/>

    }else{

        if(list.length === 0){
            return <Redirect to="/dashboard/first"/>
        }

        return (
            <>
                <FirstBranchoffice {...props} flag={flag}/>
            </>
        );
    }
};



//----------> REDUX

const mapStateToProps = (state) => {
    return {
        sesion: state.login
    }
}



export default connect(mapStateToProps)(NewRestaurant)

