import React from 'react';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import DataSucursal from './items/data-sucursal';
import { CenterTop } from '../../../components/containers/containers';




const ItemBranchoffice = (props) => {

    
    

    // if(props.sucursales.length === 0){

    //     return <Redirect to="/dashboard/first"/>

    // }
    return (
        <CenterTop>
            <DataSucursal {...props}/>
        </CenterTop>
    );
    
    
};

//------> REDUX

const mapStateToProps = (state) => {
    return {
        sucursales: state.sucursales
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemBranchoffice);