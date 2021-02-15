import React from 'react';
import { Split } from '../../components/containers/containers';
import { ContainerFooterForm } from './styles/styles-footers';

const FooterForm = (props) => {
    return (
        <ContainerFooterForm>
            <Split>
                <p>{props.left}</p>
                <p>{props.right}</p>
            </Split>
        </ContainerFooterForm>
        
    );
};

export default FooterForm;