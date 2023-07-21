// const inputBornDate = document.querySelector('#birth');

// inputBornDate.addEventListener('blur', (evento) => {
//     validateBorn(evento.target);
// });
export function valida(input){
    const typeOfInput = input.dataset.tipo;
    if(validations[typeOfInput]){
        validations[typeOfInput](input);
    }
}

const validations = {
    nacimiento: input => validateBorn(input),
}

function validateBorn(input){
    const userDate = new Date(input.value);
    let mensaje = '';
    adult(userDate);
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
    date.getUTCDate());
    return diffDates < actualDate;
}
