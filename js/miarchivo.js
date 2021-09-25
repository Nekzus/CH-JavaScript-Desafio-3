/*** En este tercer desafio genere el codigo mediante un bucle while que verifica que el campo de usuario no este vacio, con la aplicacion del 
condicional switch se verifica la coincidencia del usuario ingresado con el usuario registrado.
Una vez se comprueba la legitimidad del usuario, mediante un if y contadores, se limita el acceso a 2 sesiones por usuario registrado. ****/


/* El usuario ingresa su nombre de cuenta.
Usuarios Registrados 'mathias' y 'natalia'. */
let usuario = prompt("Ingresar Usuario - 'mathias' o 'natalia'.");

// Contadores de sesiones iniciadas.
let i = 0; // cuenta sesiones 'mathias'.
let j = 0; // cuenta sesiones 'natalia'.

// Se verifica que el campo de usuario no este vacio, en tal caso se vuelve a solicitar se ingrese usuario.
while(usuario != null) {
    switch(usuario.toLowerCase()) {
        case "mathias":  // si el usuario es mathias ejecuta if, de lo contrario verifica proximo usuario.
            i < 2  // Aplico un IF TERNARIO, si la cantidad de sesiones no supera 2 continua con el conteo de sesiones, de lo contrario devuelve mensaje de número de sesiones superadas.
                ? (i++, // Se incrementa contador de sesiones.
                alert(`Bienvenido Mathias Barbosa \nTipo de cuenta: Tutor \nSesiones: ${i} \nSesiones restantes: ${2 - i}`))
                : alert(`Mathias superaste el número de sesiones permitidas.`);

            break;
        case "natalia":  // si el usuario es natalia ejecuta if, de lo contrario devuelve mensaje de error 'usuario no existe'.
            j < 2  // Aplico un IF TERNARIO, si la cantidad de sesiones no supera 2 continua con el conteo de sesiones, de lo contrario devuelve mensaje de número de sesiones superadas.
                ? (j++, // Se incrementa contador de sesiones.
                alert(`Bienvenida Natalia Machado \nTipo de cuenta: Profesor \nSesiones: ${j} \nSesiones restantes: ${2 - j}`))
                : alert(`Natalia superaste el número de sesiones permitidas.`);

            break;
        default:
            alert(`Error: el usuario ingresado "${usuario}" no existe.`);
    }
        usuario = prompt("Vuelve a ingresar Usuario - 'mathias' o 'natalia'."); // Si el usuario no existe, o esta vacio, vuelve a solicitar el ingreso.
}