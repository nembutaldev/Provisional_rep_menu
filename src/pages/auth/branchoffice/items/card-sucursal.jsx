import React from 'react';
import { CardContainer } from '../../../../components/containers/containers';
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'



const CardSucursal = (props) => {

    const {name, id_restaurant, url_image} = props.item
    
    //console.log('BATMAN', props.item.id_restaurant)    

    return (
        <Link   to={`/dashboard/sucursal/${id_restaurant}`} 
                style={{textDecoration:'none'}}>
                    
        <CardContainer data-tip data-for={`sucursalName_${id_restaurant}`}>

            <div className="icon">
                <img src={url_image} alt="popadvise"/>
            </div>

            <section className="info">
                <h1 >{name}</h1>
                <ReactTooltip   id={`sucursalName_${id_restaurant}`}
                                backgroundColor="var(--base)"
                                >
                    {name}
                </ReactTooltip>

                
                
            </section>

            <section className="published">

            {/*             
                <p>
                    {props.item.published === 0 ?

                    'No publicado'
                    :
                    'Activo'
                    
                    }
                </p>
            */}
            </section>
            
        </CardContainer>
        </Link>
        
    );
};

export default CardSucursal;