import React from 'react';
import {  BackModalCopy, CajaModalCopy } from './styles/modal-styles';

const ModalCopy = (props) => {
    return (
        <>
            <BackModalCopy toggleCopy={props.toggleCopy} onClick={props.toggleModal}/>
            <CajaModalCopy toggleCopy={props.toggleCopy}>
                {props.children}
            </CajaModalCopy>
        </>

    );
};

export default ModalCopy;