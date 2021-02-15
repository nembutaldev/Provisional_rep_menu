export const minLength = (inputData, minLength) =>{

    const { value } = inputData;
    
    removeClass(inputData);

    if(minLength > value.length){
        inputData.classList.add('error');
        return false;
    }else{
        inputData.classList.add('success');
        return true;
    }

}

export const numberPhone = (inputData, minLength) =>{

    removeClass(inputData);
    const numberString = /^([0-9])*$/;
    const { value } = inputData;
    const result = numberString.test(value);

    if(minLength > value.length){
        inputData.classList.add('error');
        return false;
    }else{
        if(result){
            inputData.classList.add('success');
            return true;
        }else{
            inputData.classList.add('error');
            return false;
        }
        
    }
    

}

export const mailValidate = (inputData) =>{
    
    removeClass(inputData);
    const emailString = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //const emailString = '';
    const { value } = inputData
    const result = emailString.test(value);

    if(result){
        inputData.classList.add('success');
        return true;
    }else{
        inputData.classList.add('error');
        return false;
    }

}

export const webValidate = (inputData) =>{
    removeClass(inputData);
    //const webString = /^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)( [a-zA-Z0-9\-\.\?\,\'\/\\\+&%\$#_]*)?$/
    //const webString = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.(com$|net$|org$)/
    //const webString = /^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/

    const webString = /^[\w]+([\.]+[\w]+)+$/

    const {value} = inputData
    const result = webString.test(value);
    if(result){
        inputData.classList.add('success');
        return true;
    }else{
        inputData.classList.add('error');
        return false;
    }
}

export const faceValidate = (inputData) =>{
    removeClass(inputData);
    const faceString = /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/
    const {value} = inputData
    const result = faceString.test(value)
    if(result){
        inputData.classList.add('success');
        return true;
    }else{
        inputData.classList.add('error');
        return false;
    }
}

export const instaValidate = (inputData) =>{
    removeClass(inputData);
    const faceString = /(?:http:\/\/)?(?:www\.)?instagram\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/
    const {value} = inputData
    const result = faceString.test(value)
    if(result){
        inputData.classList.add('success');
        return true;
    }else{
        inputData.classList.add('error');
        return false;
    }
}






const removeClass = (inputData) =>{
    inputData.classList.remove('success');
    inputData.classList.remove('error');
}