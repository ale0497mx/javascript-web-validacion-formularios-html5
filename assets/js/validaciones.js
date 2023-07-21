
// const inputBornDate = document.querySelector('#birth');

// inputBornDate.addEventListener('blur', (evento) => {
//     validateBorn(evento.target);
// });
export function valida(input){
    const typeOfInput = input.dataset.tipo;
    if(validations[typeOfInput]){
        validations[typeOfInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector('.input-message-error').innerHTML = '';
;    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector('.input-message-error').innerHTML = viewErrorMessage(typeOfInput,input);
    }
}
const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const errorMensajes = {
    name: {
        valueMissing: "Este campo nombre no puede estar vacio"
    },
    email: {
        valueMissing: "Este campo correo no puede estar vacio",
        typeMismatch: "el correo no es valido"
    },
    password: {
        valueMissing: "Este campo contraseña no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes ser mayor de edad para registrate"
    },
}

const validations = {
    nacimiento: (input) => validateBorn(input),
}

function viewErrorMessage(typeOfInput, input){
    let message = "";
    errorTypes.forEach( (error) =>{
        if(input.validity[error]){
            console.log(error);
            console.log(input.validity[error]);
            console.log(errorMensajes[typeOfInput][error]);
            message = errorMensajes[typeOfInput][error];
        }
    });
    return message;
}

function validateBorn(input){
    const userDate = new Date(input.value);
    let mensaje = '';
    if(!adult(userDate)){
        mensaje = 'Debes ser mayor de edad para registrate';
    }
    input.setCustomValidity(mensaje);
}
function adult(date){
    const actualDate =  new Date();
    const diffDates = new Date(
    date.getUTCFullYear() + 18, 
    date.getUTCMonth(), 
    date.getUTCDate()
    );
    return diffDates < actualDate;
}