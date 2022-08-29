import { obtenerClienteEditar, editarCliente } from "./API.js"
import { mostrarAlerta } from "./funciones.js"

(function () {

    //Campos formulario
    const nombreInput=document.querySelector("#nombre")
    const emailInput=document.querySelector("#email")
    const empresaInput=document.querySelector("#empresa")
    const telefonoInput=document.querySelector("#telefono")
    const idInput=document.querySelector("#id")

    document.addEventListener("DOMContentLoaded", async () => { //Llenar inputs al cargar editar-cliente
        
        //Obteniendo el ID del cliente desde la URL.
        const parametroUrl = new URLSearchParams(window.location.search).get("id")
        const clienteId = parseInt(parametroUrl)
        const datosCliente = await obtenerClienteEditar(clienteId)
        
        /*
        Con los datos obtenidos por FETCH en API.js, se obtiene el cliente mediante el ID pedido por URL.
        */

        llenarInputs(datosCliente) 


        //Guardar Cliente actualizado
        const formulario = document.querySelector("#formulario")
        formulario.addEventListener("submit", validarCliente)

    })
  
    function llenarInputs(cliente){
        const { nombre, empresa, email, telefono, id } = cliente;

        nombreInput.value=nombre;
        emailInput.value=email;
        empresaInput.value=empresa;
        telefonoInput.value=telefono;
        idInput.value=id;
    }

    function validarCliente(e){
        e.preventDefault()

        //Creando objeto de cliente para facil iteracion
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }

        //## Comprobando los inputs ##
        if (!Object.values(cliente).every(input => input !== "")) {
            mostrarAlerta("Todos los campos son obligatorios");
            return;
        } 

        //## Actualizar registo Json (api.js)
        editarCliente(cliente); 
    }
})();