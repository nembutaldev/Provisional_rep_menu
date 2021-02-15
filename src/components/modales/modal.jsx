import React from 'react';
import { BackModal, CajaModal } from './styles/modal-styles';

const Modal = (props) => {

    const keyFunction = React.useCallback((e) =>{
        const keyEsc = () =>{
            if(props.cerrarFunction){

                if(e.keyCode === 27){
                    props.cerrarFunction();
                }
            }
        }
        return keyEsc();
    },[props])

    React.useEffect(() =>{
        window.addEventListener('keydown', keyFunction)
        return () =>{ window.removeEventListener('keydown', keyFunction) }
    },[keyFunction])


    return (
        <>
            <BackModal toggle={props.toggle} onClick={props.toggleModal}/>
            <CajaModal toggle={props.toggle}>
                {props.children}
            </CajaModal>
        </>

    );
};

export default Modal;