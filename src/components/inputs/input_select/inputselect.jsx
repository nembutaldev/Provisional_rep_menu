import React from 'react';
import { SelectContainer } from '../item-forms';
import PropTypes from 'prop-types'

const InputSelect = (props) => {

    const {options} = props

    return (
    
        <SelectContainer>
            <span><i className="fas fa-caret-down"></i></span>
                <select name={props.name} onChange={props.onChange} value={props.value}>
                <option value="">{props.default}</option>
                  {
                      options.map((option, i)=>{
                        return <option key={i} value={option}>{option}</option>
                      })
                  }  
                </select>   
        </SelectContainer>
    );
};


export default InputSelect;







//-----> PROPTYPES

InputSelect.propTypes = {
  options: PropTypes.array.isRequired,
  default: PropTypes.string.isRequired
}