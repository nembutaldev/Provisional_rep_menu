import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const SpinerForm = () => {


    const styles = {
        center:{
            width:'100%',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            padding:'20px 0px'
        }
    }


    return (

        <section style={styles.center}>
             <PropagateLoader
                size={20}
                color={"var(--base)"} 
                />  
        </section>
        
    );
};

export default SpinerForm;