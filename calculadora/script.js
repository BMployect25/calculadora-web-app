function agregar(valor){

let pantalla = document.getElementById("pantalla");

pantalla.value += valor;

}

function borrar(){

document.getElementById("pantalla").value = "";

}

function calcular(){

let pantalla = document.getElementById("pantalla");

pantalla.value = eval(pantalla.value);

}

function filtrarInput(){
    let pantalla = document.getElementById("pantalla");
    // Reemplaza cualquier carácter que no sea un número o un operador con una cadena vacía.
    pantalla.value = pantalla.value.replace(/[^0-9+\-*/]/g, '');
}

document.addEventListener("keydown", function(event){

let tecla = event.key;

//!isNaN(tecla) verifica si la tecla no es un número.
if(!isNaN(tecla) || ['+', '-', '*', '/'].includes(tecla)){
    agregar(tecla);
    // Evitar que la tecla se ingrese dos veces.
    event.preventDefault();
}

});


function cambiarTema(){

document.body.classList.toggle("dark");

}