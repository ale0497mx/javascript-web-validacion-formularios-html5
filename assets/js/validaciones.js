
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
    }else{
        input.parentElement.classList.add("input-container--invalid");
    }
}

const errorMensajes = {
    name: {
        valueMissing: "Este campo no puede estar vacio"
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMissing: "el correo no es valido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patterMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    bornDate: {
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes ser mayor de edad para registrate"
    }
}

const validations = {
    nacimiento: (input) => validateBorn(input),
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