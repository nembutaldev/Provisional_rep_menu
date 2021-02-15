//ESTE ES EL COMPONENTE PADRE
import React from 'react';
import StepOne from './forms/step-one';
import {geocodeByAddress, getLatLng} from 'react-google-places-autocomplete'
import { CenterElement } from '../../../components/containers/containers';
import StepTwo from './forms/step-two';
import StepThree from './forms/step-three';
import StepFour from './forms/step-four';
import StepFive from './forms/step-five';
import { PostMethod, GetMethod } from '../../../utils/peticiones';
import {connect} from 'react-redux'
import { SuccesAlert, ErrorAlert, InfoAlert } from '../../../utils/alertas';
import uuid from 'react-uuid'


const FirstBranchOffice = (props) => {

    console.log('FORMULARIO-EDITAR',props)

    const token = props.sesion.token
    
    
   
    const urlFacebook = 'http://www.facebook.com/'
    const urlInstagram = 'http://www.instagram.com/'
    const urlWebsite = 'http://'

    const [sucursal, setSucursal] = React.useState({
        name:'',
        telephone:'',
        place:'',
        address:{ latitude:'', longitude:'', place:''},
        category:'',
        days:{
            lunes:{day:'Lunes', enable:false, start:'00:00', end:'00:00'},
            martes:{day:'Martes', enable:false, start:'00:00', end:'00:00'},
            miercoles:{day:'Miércoles', enable:false, start:'00:00', end:'00:00'},
            jueves:{day:'Jueves', enable:false, start:'00:00', end:'00:00'},
            viernes:{day:'Viernes', enable:false, start:'00:00', end:'00:00'},
            sabado:{day:'Sábado', enable:false, start:'00:00', end:'00:00'},
            domingo:{day:'Domingo', enable:false, start:'00:00', end:'00:00'},
        },
        website:'',
        facebook:'',
        instagram:'',
        email:'',
        tables:0,
        id_user: props.sesion.user.id_user,
        image:null,
        imageUrl:'',
        uuid:uuid()
    })
    const [error, setError] = React.useState({
        e_name:false,
        e_telephone:false,
        e_website:false,
        e_facebook:false,
        e_instagram:false,
        e_email:false
    })

    React.useEffect(() =>{
        if(props.match.params.id){
            const getSucursal = async () =>{
                const result = await GetMethod(`api/users/restaurant/${props.match.params.id}`, {Authorization:'Bearer ' + token})
                console.log(result.response.data.data)
                if(result.ok){
                    const data = result.response.data.data
                    setError({
                        e_name:true,
                        e_telephone:true,
                        e_website:true,
                        e_facebook:true,
                        e_instagram:true,
                        e_email:true
                    })
                    setSucursal({
                        ...sucursal,
                        name:data.name,
                        telephone: data.telephone,
                        place: data.address,
                        category: data.category
                    })
                }
            }
            getSucursal();
        }
    },[])


    
    const [indice, setIndice] = React.useState(1);
    const [load, setLoad] = React.useState(false);

    const handleChange = (e) =>{
        const { target:{name, value}} = e
        setSucursal({...sucursal, [name]:value})
    }
    const nextStep = () =>{setIndice(indice + 1)}
    const prevStep = () =>{setIndice(indice - 1)}
    
    const handleSelect = (e) =>{
       //console.log(e.description)
       const place = e.description
       geocodeByAddress(place)
       .then(results => getLatLng(results[0]))
       .then(({lat, lng}) => setSucursal({
           ...sucursal,
           place: place,
           address:{
               ...sucursal.address,
               place: place,
               latitude:lat,
               longitude:lng
           }
       }))
     //------>   
    }
    const handleChecked = (e) =>{
        if(e.target.checked){
            setSucursal({
                ...sucursal,
                days:{ ...sucursal.days,
                        [e.target.name]:{ ...sucursal.days[e.target.name],
                        enable: e.target.checked
                    }
                }
            })
        }else{
            setSucursal({
                ...sucursal,
                days:{ ...sucursal.days,
                        [e.target.name]:{ ...sucursal.days[e.target.name],
                        enable: e.target.checked,
                        start:'',
                        end:''
                    }
                }
            })
        }
    }
    const handleTime = (e) =>{
        setSucursal({
            ...sucursal,
            days:{
                ...sucursal.days,
                [e.target.name]:{
                    ...sucursal.days[e.target.name],
                    [e.target.id]: e.target.value
                }
            }
        })
    }
    const addNumber = () =>{
        setSucursal({
            ...sucursal,
            tables: sucursal.tables + 1
        })
    }

    const removeNumber = () =>{
        if(sucursal.tables === 0){
            setSucursal({...sucursal, tables: sucursal.tables})
        }else{
            setSucursal({...sucursal, tables: sucursal.tables - 1})
        }
    }

    

    const handleSubmit = async (e) =>{
        setLoad(true)
        const {name, telephone, place, category, tables} = sucursal
    
        if(name === '' || telephone === '' || place === '' || category === '' || tables === 0){
            InfoAlert('Asegurate de llenar bien todos los campos');
            setLoad(false)
            return;
        }
        
        
        const sucursalObject = {
            ...sucursal,
            facebook: urlFacebook + sucursal.facebook,
            instagram: urlInstagram + sucursal.instagram,
            website: urlWebsite + sucursal.website
        }

        //console.log('resultado', sucursalObject)

        const result = await PostMethod(sucursalObject,'api/users/restaurant', {Authorization:'Bearer ' + token})
        if(result.ok){
          SuccesAlert('Sucursal creada')
          props.history.push('/dashboard')
          setLoad(false)
        }else{
          ErrorAlert('algo salio mal')
          setLoad(false)
          props.history.push('/dashboard/first')
          console.log(result)
        }
        //console.log(sucursal)
    }
    

    //console.log(sucursal)

    


    const renderForms = () =>{
        switch (indice) {
            case 1:
                return(
                    <StepOne    sucursal={sucursal}
                                handleChange={handleChange}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                handleSelect={handleSelect}
                                flag={props.flag}
                                error={error}
                                setError={setError}
                                />
                )
            case 2:
                return(
                    <StepTwo    sucursal={sucursal}
                                handleChange={handleChange}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                handleChecked={handleChecked}
                                handleTime={handleTime}
                                />
                )
            
            case 3:
                return(
                    <StepThree  sucursal={sucursal}
                                handleChange={handleChange}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                error={error}
                                setError={setError}
                                
                                />
                )

            case 4:
                return(
                    <StepFour   nextStep={nextStep}
                                prevStep={prevStep}
                                sucursal={sucursal}
                                setSucursal={setSucursal}
                                />
                )
            
            case 5:
                return(
                    <StepFive   sucursal={sucursal}
                                nextStep={nextStep}
                                prevStep={prevStep}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                addNumber={addNumber}
                                removeNumber={removeNumber}
                                load={load}
                                />
                )
        
            default:
                return;
        }
    }

    

    return (
        <CenterElement>
                
            {renderForms()} 
            
        </CenterElement>
        
    );
};







//REDUX-------------->
const mapStateToProps = (state) => {
    return {
        sesion: state.login
    }
}
export default connect(mapStateToProps)(FirstBranchOffice)
