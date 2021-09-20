/*** En este tercer desafio genere el codigo mediante un bucle while que verifica que el campo de usuario no este vacio, con la aplicacion del 
condicional switch se verifica la coincidencia del usuario ingresado con el usuario registrado.
Una vez se comprueba la legitimidad del usuario, mediante un if y contadores, se limita el acceso a 2 sesiones por usuario. ****/


/* El usuario ingresa sus datos de cuenta.
Usuarios Registrados 'Mauricio' y 'Natalia'. */
let usuario = prompt("Ingresar Usuario - 'Mauricio' o 'Natalia'.");

// Contadores de sesiones iniciadas.
let i = 0; // cuenta sesiones 'Mauricio'.
let j = 0; // cuenta sesiones 'Natalia'.

// Se verifica que el campo de usuario no este vacio, en tal caso se vuelve a solicitar se ingrese usuario.
while(usuario != null) {
    switch(usuario) {
        case "Mauricio":  // si el usuario es Mauricio ejecuta if, de lo contrario verifica proximo usuario.
            if(i < 2) { // Si la cantidad de sesiones no supera 2 continua con el conteo de sesiones, de lo contrario devuelve mensaje de número de sesiones superadas.
                i++; // Se incrementa contador de sesiones.
                alert(`Bienvenido Mauricio Ortega \nTipo de cuenta: Alumno \nSesiones: ${i} \nSesiones restantes: ${2 - i}`);
            }else{
            alert(`${usuario} superaste el número de sesiones permitidas.`);
            }
            break;
        case "Natalia":  // si el usuario es Natalia ejecuta if, de lo contrario devuelve mensaje de error 'usuario no existe'.
            if(j < 2) {  // Si la cantidad de sesiones no supera 2 continua con el conteo de sesiones, de lo contrario devuelve mensaje de número de sesiones superadas.
                j++; // Se incrementa contador de sesiones.
                alert(`Bienvenida Natalia Machado \nTipo de cuenta: Profesora \nSesiones: ${j} \nSesiones restantes: ${2 - j}`);
            }else{
            alert(`${usuario} superaste el número de sesiones permitidas.`);
            }
            break;
        default:
            alert(`Error: el usuario ingresado "${usuario}" no existe.`);
    }
        usuario = prompt("Vuelve a ingresar Usuario - 'Mauricio' o 'Natalia'."); // Si el usuario no existe, o esta vacio, vuelve a solicitar el ingreso.
}