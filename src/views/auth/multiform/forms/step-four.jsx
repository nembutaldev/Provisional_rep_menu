//import SpinerForm from '../../../../components/spiners/spiner-form';
import React from 'react';
import { Form, FieldInput } from '../../../../components/inputs/item-forms';
import BartopForm from '../../../../components/bartop/bartop-form';
import InputFile from '../../../../components/inputs/input_file/input_file';
import { ButtonSubmit } from '../../../../components/buttons/button-submit';
import { ButtonText } from '../../../../components/buttons/button-text';
import { PostMethod } from '../../../../utils/peticiones';
import {connect} from 'react-redux'
import SpinerUpload from '../../../../components/spiners/spiner-upload';
import { InfoAlert } from '../../../../utils/alertas';




const StepFour = (props) => {
    console.log('%c->BATMAN', 'color:yellow',props)
    const token = props.sesion.token
    const {setSucursal, sucursal} = props
    const {imageUrl} = props.sucursal
    const [load, setLoad] = React.useState(false)

    const handleDrop = (e) =>{
            e.preventDefault();
            setLoad(true)
            const file = e.dataTransfer.files[0]
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = async function(){
                const image = file
                const uuId = sucursal.uuid
                const type = 'sucursal'
                const formData = new FormData();
                formData.append('uuid', uuId)
                formData.append('type', type)
                formData.append('image', image)
                const result = await PostMethod(formData, 'api/users/uploads', {Authorization: 'Bearer ' + token})
                if(result.ok){
                    setSucursal({
                        ...sucursal,
                        image:file,
                        imageUrl:result.response.path
                    })
                    setLoad(false)
                }
            }

    }

    const handleDragOver = (e) =>{
        e.preventDefault();
    }


    const handleFile = (e) =>{
        //console.log('ordenado')
        if(e.target.files && e.target.files[0]){
            setLoad(true)
            const file = e.target.files[0]
            let reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = async function  (){
                //setSucursal({...sucursal, image: file, imageUrl:reader.result})
                const image = file
                const uuId = sucursal.uuid
                const type = 'sucursal'
                const formData = new FormData();
                formData.append('uuid', uuId)
                formData.append('type', type)
                formData.append('image', image)

                //console.log(reader.result)
                const result = await PostMethod(formData, 'api/users/uploads', {Authorization: 'Bearer ' + token})
                if(result.ok){
                    
                    setSucursal({
                        ...sucursal,
                        image:file,
                        imageUrl:result.response.path
                    })
                    setLoad(false)
                }
                console.log('AQUI DEBE ESTAR', result)
            }
            
        }
        
        
        
    }
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(imageUrl === ''){
            InfoAlert('Asegurate de subir una imagen')
            return;
        }
        props.nextStep()
    }



    return (
        <>
        <Form border onSubmit={handleSubmit}>
        <BartopForm         title="Agrega el logotipo del restaurante"
                            subtitle="Formatos aceptados: jpg y png; peso máximo, 5mb"
                            icon="fas fa-store"
                            
                            />

        {/* ------------->INPUT PREVIEW */}
        <FieldInput>
            <InputFile  ide="img"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onChange={handleFile}
                        imgPrevio={imageUrl}
                        />
        </FieldInput>
        {/* ------------->INPUT PREVIEW */}
        <FieldInput>{ load ? <SpinerUpload/> : null } </FieldInput>
            <ButtonSubmit margin>Siguiente</ButtonSubmit>
            <ButtonText onClick={props.prevStep}><span>Anterior</span></ButtonText>

        </Form>
        </>
    );
};





// ----------> REDUX
const mapStateToProps = (state) => {
    return {
        sesion: state.login
    }
}

export default connect(mapStateToProps)(StepFour)


//<a href="http://192.168.0.7:8000/api/pdftest" target="_blank">DESCARGAR</a>
//<button onClick={props.nextStep}>Next</button>
//<button onClick={props.prevStep}>Prev</button>