import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input"); // todos los elementos de tipo input
inputs.forEach(input => {
    input.addEventListener("blur", (event) => {
        valida(event.target);    
    });
});