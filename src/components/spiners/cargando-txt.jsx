import React from 'react';

const CargandoTxt = (props) => {
    return (
        <div style={{
            width:'100%',
            height:'100vh',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            <h1 style={{
                color:'#ccc'
            }}>Cargando...</h1>
        </div>
    );
};

export default CargandoTxt;