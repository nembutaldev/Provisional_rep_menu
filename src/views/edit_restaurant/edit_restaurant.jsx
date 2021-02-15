import React from 'react';
import FirstBranchoffice from '../auth/multiform/first-branchoffice';

const EditRestaurant = (props) => {

    console.log('EDITAR RESTAURANTE',props.match.params.id)

    
    
    return (
        <div>
            <FirstBranchoffice {...props}/>
        </div>
    );
};

export default EditRestaurant;