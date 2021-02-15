import React from 'react';
import VacioImg from '../../assets/img/vacio.png'
import styled from 'styled-components'

const ContainerVacio = styled.section`
    display:flex;
    flex-flow:column;
    align-items:center;
    img{
        width:100%;
        max-width:400px;
    }
    p{
        font-size:1.2rem;
        font-family:'Light';
    }
`;


const VacioItem = (props) => {
    return (
        
        <ContainerVacio>
            <div>
                <img src={VacioImg} alt="PopAdvise"/>
            </div>

            <div>
                <p>{props.texto}</p>  
            </div>
        </ContainerVacio>
        
    );
};

export default VacioItem;