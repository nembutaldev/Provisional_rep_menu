import React from 'react';

const CabeceraSucursalesList = (props) => {
    return (
        <>
        <div style={{
            padding:'10px 0px 40px 0px',
            textAlign:'center'
        }}>
            <p style={{
                fontSize:'1rem',
                color:'var(--colordos)'
            }}>
                Haz click en el restaurante para administrarlo <br/>
                Descargar el pdf con los QR para tus mesas   
            </p>
        </div>
        </>
    );
};

export default CabeceraSucursalesList;