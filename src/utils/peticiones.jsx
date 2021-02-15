import axios from 'axios'
import { baseUrl } from "./api"



export const PostMethod = (data, uri, headers) =>{
    const url = `${baseUrl}/${uri}`
    const params = {
        method:'POST',
        data:data,
        headers:headers
    };


    return  axios(url, params)
            .then((response) =>{
                //console.log(response.status)
                if(response.status !== 200){
                    return{
                        ok:false,
                        message:'algo salio mal',
                        response: response
                    }
                }else{
                    console.log(response)
                    return{
                        ok:true,
                        message:'succes',
                        response:response.data
                    }
                }
            })
            .catch((error) =>{
                console.log(error)
                return{
                    ok:false,
                    message:'error',
                    response:error.response
                }
            })
            
}



export const GetMethod = ( uri, headers) =>{
    const url = `${baseUrl}/${uri}`;
    const params = {
        method:'GET',
        headers:headers
    }
    //console.log(params)
    
    //console.log('HEADERS', url, params)
    return axios(url, params)
    .then((response) =>{
        //console.log('AXIOS',url, params, response)
        
        if(response.status !== 200){
                return{
                    ok:false,
                    message:'Algo salio mal'
                }
            }else{
                return{
                    ok:true,
                    message:'succes',
                    response:response
                }
            }
        })
        .catch((error) =>{
            //console.log('PETICION',error.response)
            return{
                ok:false,
                response:error.response
            }
        })
        
}


export const PutMethod = (data, uri, headers) =>{
    const url = `${baseUrl}/${uri}`
    const params = {
        method:'PUT',
        data:data,
        headers:headers
    };

    return axios(url, params)
    .then(response =>{
        return{
            ok:true,
            response:response
        }
    })
    .catch(error =>{
        return{
            ok:false,
            response:error.response
        }
    })
}



export const DeleteMethod = (uri, headers) =>{
    const url = `${baseUrl}/${uri}`
    const params = {
        method:'DELETE',
        headers:headers
    }


    return axios(url, params)
    .then((response) =>{
        return{
            ok:true,
            response:response
        }

    })
    .catch((error) =>{
        return{
            ok:false,
            response:error.response
        }
    })

}

