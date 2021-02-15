import React from 'react';
import MoonLoader from "react-spinners/MoonLoader";




const SpinerCharge = (props) => {
    return (
            <section style={{
                width:'100%',
                height:'80vh',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <MoonLoader
                    size={80}
                    color={"var(--base)"} 
                    />  
            </section>
    );
};

export default SpinerCharge;