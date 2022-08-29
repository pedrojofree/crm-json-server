import { mostrarAlerta } from "./funciones.js" //Import alerta
import { nuevoCliente } from "./api.js" //Import nuevoCliente

(function () {
    const formulario = document.querySelector("#formulario")
    formulario.addEventListener("submit", validarCliente)

    function validarCliente(e){ // #1
        e.preventDefault()

        const nombre = document.querySelector("#nombre").value
        const email = document.querySelector("#email").value
        const telefono = document.querySelector("#telefono").value
        const empresa = document.querySelector("#empresa").value

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        //## Comprobando los inputs ##
        if (!Object.values(cliente).every(input => input !== "")) {
            mostrarAlerta("Todos los campos son obligatorios");
            return;
        } 

        //## Insertar cliente en Json (api.js)
        nuevoCliente(cliente); 
    }
})();