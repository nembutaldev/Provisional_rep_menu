import React from 'react';
import { ContainerFooterRedes } from './styles/styles-footers'
import { facebook, firma, correo, instagram, twitter } from '../../config/redes';
import Media from 'react-media'



const FooterRedes = (props) => {
    return (
        <ContainerFooterRedes>
            <p>{firma}</p>

                {/* RESPONSIVE */}
                    <Media query="(min-width:500px)" render={() =>(
                        <p>|</p>
                    )}/>


            <p>{correo}</p>
            
                {/* RESPONSIVE */}
                    <Media query="(min-width:500px)" render={() =>(
                        <p>|</p>
                    )}/>

            <section>

                <a href={facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                </a>

                <a href={twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter-square"></i>
                </a>

                <a href={instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram-square"></i>
                </a>  
                                
            </section>
        </ContainerFooterRedes>
        
    );
};

export default FooterRedes;
