import React from 'react';
import InputCheck from '../../../../components/inputs/input_check/input_check';
import TimeField from 'react-simple-timefield'
import { Split } from '../../../../components/containers/containers';
import { FieldInput, ContainerTimer } from '../../../../components/inputs/item-forms';
import { Input } from '../../../../components/inputs/inputs';




const ItemDay = (props) => {
  
    const {day} = props
    const valorCheck = props.sucursal.days[day].enable
    const valorStart = props.sucursal.days[day].start
    const valorEnd = props.sucursal.days[day].end
    const enable = props.sucursal.days[day].enable
    
    const dayRender = () =>{
        switch (day) {
            case 'lunes':
                return 'Lunes'
            case 'martes':
                return 'Martes'
            case 'miercoles':
                return 'Miércoles'
            case 'jueves':
                return 'Jueves'
            case 'viernes':
                return 'Viernes'
            case 'sabado':
                return 'Sábado'
            case 'domingo':
                return 'Domingo'
            default:
                return;
        }
    }


    const handlePicker = (time) =>{
        console.log(time)
    }

    return (
        
        <FieldInput>
            <Split>
            <section>
                <Split>
                <InputCheck i={props.i}
                            name={day}
                            onChange={props.handleChecked}
                            defaultChecked={valorCheck}
                            
                            required={true}
                            />
                <span style={{padding:'0px 10px', color:'gray', fontFamily:'Light'}}>{dayRender()}</span>
                </Split>
            </section>

            
            

            <section style={{width:'60%'}}>
                <Split margin>
                    

                    <section className="left">
                    <ContainerTimer>
                        <span><i className="fas fa-clock"></i></span>
                        <TimeField  
                                    value={valorStart}
                                    onChange={props.handleTime}
                                    input={
                                            <Input  name={props.day}
                                                    id="start"
                                                    disabled={enable ? false : true}
                                                    padding="10px 10px 10px 20px"
                                                    />
                                            }
                                    colon=':'
                                    showSeconds={false}
                                    />
                            
                    </ContainerTimer>

                    
                    </section>

                    <section className="right">
                    <ContainerTimer>
                        <span><i className="fas fa-clock"></i></span>
                        <TimeField  
                                    value={valorEnd}
                                    onChange={props.handleTime}
                                    input={
                                            <Input  name={props.day} 
                                                    id="end"
                                                    disabled={enable ? false : true}
                                                    padding="10px 10px 10px 20px"
                                                    />
                                            }
                                    colon=':'
                                    showSeconds={false}
                                    />
                    </ContainerTimer>
                                
                    
                    </section>
                </Split>
     
            </section>
            </Split>
        </FieldInput>
    );
};

export default ItemDay;