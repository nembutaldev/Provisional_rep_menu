import React from 'react';
import { GetMethod, PostMethod } from '../../../../utils/peticiones';
import SpinerCharge from '../../../../components/spiners/spiner-charge';
import { WidthCaja, ItemCaja, CenterItem } from '../../../../components/containers/containers';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { FieldInput, Label } from '../../../../components/inputs/item-forms';
import { SuccesAlert, ErrorAlert } from '../../../../utils/alertas';
import { InputSelectApi } from '../../../../components/inputs/input_select/inputselect_api';
import { QrContainer } from '../styles/branch-styles';
import ReactTooltip from 'react-tooltip'



const DataSucursal = (props) => {

    

    const token = props.sesion.token
    const ideSucursal = props.match.params.id
    const [load, setLoad] = React.useState(true)
    
    

    React.useEffect(()=>{
        const getSucursal = async () =>{
            const result = await GetMethod(`api/users/restaurant/${ideSucursal}`, {Authorization:'Bearer ' + token})
            if(result.ok){
                setLoad(false)
            }else{
                setLoad(false)
                console.log(result.response)
            }
        }
        getSucursal();
    },[ideSucursal, token])

    const handleMenu = async (e) => {
        
        const assingNew = {
            id_menu:e.target.value,
            id_restaurant:ideSucursal
        }
        const result = await PostMethod(assingNew, `api/users/restaurant/set_menu`, {Authorization:'Bearer ' + token})
        if(result.ok){
            SuccesAlert('Menu asignado')
        }else{
            ErrorAlert('Algo salio mal')
        }
    }
    
    

    

    if(load){

        return <SpinerCharge/>
 
    }else{

        return (
        
            <WidthCaja flow="column" maxWidth="400px">
                

                <ItemCaja >
                <section className="title">
                    <div className="left" data-tip data-for="suc-title" style={{cursor:'help'}}>
                        <div>
                            <span><i className="fas fa-store"></i></span>
                        </div>
                        <div>
                            <h1>title</h1>
                            
                        </div>
                    </div>
                    <div className="right">
                        <Link to={`/dashboard/`}>
                            Editar
                            <i className="fas fa-edit"></i>
                        </Link>
                    </div>
                </section>
                </ItemCaja>


                <ItemCaja>
                        
                        <FieldInput>
                            <Label>Asigna un menu</Label>
                            
                            <InputSelectApi>
                           
                            </InputSelectApi>
                          
                        </FieldInput>

                        
                        
                        
                </ItemCaja>


                <ItemCaja>
                        <FieldInput>

                        <Label>Codigos QR</Label>
                        <QrContainer>
                            <div>
                                <p>
                                Descarga e imprime  los QR´s para las mesas
                                ponlos  en tus mesas en un lugar visible para que los que
                                los clientes escanen el código y visualicen el menú.
                                </p>
                            </div>
                            <div>
                           
                                
                            </div>
                        </QrContainer>
                       
                        
                        </FieldInput>
                </ItemCaja>
            </WidthCaja>
            
        );
    }
};




//REDUX------------>

const mapStateToProps = (state) => {
    return {
        sesion: state.login
    }
}


export default connect(mapStateToProps)(DataSucursal)
