import React from 'react';
import SkewLoader from "react-spinners/SkewLoader";




const BarCharge = (props) => {
    return (
            <section style={{
                width:'50px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <SkewLoader
                    size={10}
                    color={props.color ? props.color : "var(--base)"} 
                    />  
            </section>
    );
};

export default BarCharge;