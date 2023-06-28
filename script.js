// Función para ofrecer productos según el presupuesto
function ofrecerProductos(presupuesto) {
    if (presupuesto < 15000) {
        console.log("Lo sentimos, no hayequipos disponibles para tu presupuesto.");
    } else if (presupuesto >= 15000) {

        console.log("Estos son los equipos disponibles:");
        console.log("Equipo de trabajo - $15000");
        console.log("Equipo semi gamer - $23000");
        console.log("Equipo Gamer - $30000");
    } else {
        console.log("No contamos con equipos por ese precio.");
    }
}

// Solicitar al usuario el presupuesto deseado si el valor ingresado por el usuraio es menor a 15000 se le preguntara nuevamente al usuario hasta ingresar un valor igual a 15000 o mayor 
let presupuestoUsuario;

do {
    presupuestoUsuario = parseFloat(prompt("Ingrese su presupuesto en pesos:"));

    if (isNaN(presupuestoUsuario) || presupuestoUsuario <= 14999) {
        console.log("No contamos con equipos por ese precio.");
    }
} while (isNaN(presupuestoUsuario) || presupuestoUsuario <= 14999);
// Ofrecer productos según el presupuesto utilizando la función
ofrecerProductos(presupuestoUsuario);
