import React from 'react';
import { Redirect } from 'react-router-dom'
import { GetMethod } from '../../../utils/peticiones';
import { connect } from 'react-redux';
import SpinerCharge from '../../../components/spiners/spiner-charge';
import CardSucursal from './items/card-sucursal';
import { CenterTop, WidthCaja } from '../../../components/containers/containers';
import BartopList from '../../../components/bartop/bartop-list';
import CabeceraSucursalesList from './items/cabecera-sucursales-list';



const ListBranchOffice = (props) => {
    //console.log('LISTA', props)
    const idUser = props.sesion.user.id_user
    const token = props.sesion.token
    const [list, setList] = React.useState([])
    const [load, setLoad] = React.useState(true)
    React.useEffect(() =>{
         const getRestorants = async () =>{
             const result = await GetMethod(`api/users/restaurants/${idUser}`, {Authorization:'Bearer ' + token});
             //console.log('RESP',result)
             //console.log('RESP',result.response.data.data.restaurants);
             if(result.ok){
                 setList(result.response.data.data.restaurants.reverse())
                 //props.getRestaurants(result.response.data.data.restaurants)
                 setLoad(false)
                 //console.log(list)
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
            
        <CenterTop>
        <WidthCaja maxWidth="400px" flow="column">

                <CabeceraSucursalesList/>
        
                <BartopList icon="fas fa-store"
                            title="Mis restaurantes"
                            ruta="/dashboard/nuevasucursal"
                            btntxt="crear"
                            btnicon="fas fa-plus-circle"
                            />

                {
                    list.map((item, i) =>{
                        return <CardSucursal    key={i}
                                                item={item}
                                                />
                    })
                }
        </WidthCaja>
        </CenterTop>
        
        );


    }
};





//REDUX---------------->

const mapStateToProps = (state, ownProps) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ListBranchOffice)
