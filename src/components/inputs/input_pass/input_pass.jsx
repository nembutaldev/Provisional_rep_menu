import React from 'react';
import { InputPassCont, Pass } from '../inputs'

const InputPass = (props) => {

    const [flag, setFlag] = React.useState(false)

    const changeFlag = () =>{
        setFlag(!flag);
    }



    return (
        <InputPassCont>

                <span onClick={changeFlag}>
                    {
                        flag ?
                            <i className="fas fa-eye-slash"></i>
                        :
                            <i className="fas fa-eye"></i>
                    }
                </span>

                <Pass       type={ flag ? 'text' : 'password' }
                            placeholder="Escribe tu contraseña"
                            name={props.name}
                            id={props.id}
                            value={props.value}
                            onChange={props.onChange}
                            />
        </InputPassCont>
    );
};

export default InputPass;