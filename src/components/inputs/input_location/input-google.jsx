import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { GoogleContainer } from '../item-forms';

const InputGoogle = (props) => {
    return (
        
        <GoogleContainer>
            <GooglePlacesAutocomplete  
                                        placeholder="Dirección"
                                        onSelect={props.handleSelect}
                                        initialValue={props.valor}
                                        suggestionsClassNames={{

                                            suggestionActive:"map-sug",
                                            suggestion:"map-act",
                                            container:'map-cont'

                                        }}
                                        autocompletionRequest={{
                                            componentRestrictions:{ country : ['mx'] }
                                        }}
                                
                                /> 
        </GoogleContainer>  
        
    );
};

export default InputGoogle;