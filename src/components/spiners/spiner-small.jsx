import React from 'react';
import PulseLoader from "react-spinners/PulseLoader";




const SpinerSmall = (props) => {
    return (
            <section style={{
                padding:'5px 20px'
            }}>
                <PulseLoader
                    size={8}
                    color={"var(--colorcinco)"} 
                    />  
            </section>
    );
};

export default SpinerSmall;