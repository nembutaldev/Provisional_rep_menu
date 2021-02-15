import React from 'react';
import { PrevioContainer, PreviewImg } from './styles/file-styles';

const InputFile = (props) => {

    //console.log('IMAGEN',props)
    return (
        <PrevioContainer>
        
        <section style={{width:props.width}}>
            <PreviewImg     id={props.labelId}
                            htmlFor={props.ide}
                            onDrop={props.onDrop}
                            onDragOver={props.onDragOver}
                            width={props.width}
                            >
                    
                    {
                            props.imgPrevio 
                        ?
                            <img src={props.imgPrevio} alt="popadvise"/>
                        :
                            <i className="fas fa-cloud-upload-alt"></i>
                    }
                
            </PreviewImg>
        </section>


            <input type="file" id={props.ide} onChange={props.onChange} accept="image/*"/>

        </PrevioContainer>
    );
};

export default InputFile;