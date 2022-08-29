import { mostrarAlerta } from "./funciones.js"

const url = "http://localhost:4000/clientes"


//Agregar cliente a JSON Server (POST)
export async function nuevoCliente(cliente){
    try {
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(cliente),
            headers: {
                "Content-Type": "application/json"
            }
        });
        window.location.href="index.html";
        console.log("Nuevo cliente agregado");
    } catch (error) {
        console.log(error);
        mostrarAlerta("Base de datos no alcanzada POST (JSON Server POSTEAR)");
    }
}

//Obtener TODOS los clientes (GET ALL)
export async function obtenerClientes(){
    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json()
        return clientes //Estos clientes se mostraran listados en HTML

    } catch (error) {
        console.log(error);
        mostrarAlerta("Base de datos no alcanzada GET (JSON Server OBTENER)");
    }
}

//Eliminando cliente. Pasando ID por parametro y eliminando de DB (DELETE)
export async function eliminarClienteAPI(id){
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE"
        })
        console.log("Cliente eliminado de la base de datos.");
    } catch (error) {
        console.log(error);
        mostrarAlerta("Base de datos no alcanzada DELETE (JSON Server BORRAR)")
    }
}

//Obteniendo cliente por su ID (EDITAR)
export async function obtenerClienteEditar(id){
    try {
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json()
        return cliente //cliente para valores de editar-cliente.html
    } catch (error) {
        console.log(error);
        mostrarAlerta("Base de datos no alcanzada GET (JSON Server Editar)");
    }
}

//Reescribiendo cliente por su ID (EDITAR 2)
export async function editarCliente(cliente){
    try {
        await fetch(`${url}/${cliente.id}`, {
            method: "PUT",
            body: JSON.stringify(cliente),
            headers:{
                "Content-Type": "application/json"
            }
        })
        console.log("Cliente actualizado con exito");
        window.location.href="index.html"
        
    } catch (error) {
        console.log(error);
        mostrarAlerta("Base de datos no alcanzada PUT (JSON Server Editar 2)");
    }
}