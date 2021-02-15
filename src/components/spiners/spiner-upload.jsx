import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";




const SpinerUpload = (props) => {
    return (
            <section style={{
                width:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <BeatLoader
                    size={15}
                    color={"var(--colorcinco)"} 
                    />  
            </section>
    );
};

export default SpinerUpload;