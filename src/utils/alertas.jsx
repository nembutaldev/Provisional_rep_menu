import Swal from 'sweetalert2';



export const SuccesAlert = (title, text) =>{
    return Swal.fire({
        icon:'success',
        title:title,
        text:text,
        confirmButtonText:'Aceptar',
        customClass:{
            popup:'pop-class',
            title:'title-class',
            confirmButton:'confirm-class',
            container:'container-class'
        }
    })
}

export const ErrorAlert = (title, text) =>{
    return Swal.fire({
        icon:'error',
        title:title,
        text:text,
        confirmButtonText:'Aceptar',
        customClass:{
            popup:'pop-class',
            title:'title-class',
            confirmButton:'confirm-class',
            container:'container-class'
        }
    })
}

export const InfoAlert = (title, text) =>{
    return Swal.fire({
        icon:'info',
        title:title,
        text:text,
        confirmButtonText:'Aceptar',
        customClass:{
            popup:'pop-class',
            title:'title-class',
            confirmButton:'confirm-class',
            container:'container-class'
        }
    })
}