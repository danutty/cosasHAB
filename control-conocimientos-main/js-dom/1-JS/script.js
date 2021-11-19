'use strict';

///Edita el archivo script.js para crear una función que haga lo siguiente:

//- Generar una contraseña (número entero aleatorio del 0 al 100)
const randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum);

//- Pedir al usuario que introduzca un número dentro de ese rango.
//- El usuario tendrá 5 oportunidades de acertar, si no lo consigue, aparecerá un mensaje indicando que ha perdido.
for (let intentos = 5; intentos > 0; intentos--) {
  const pass = Number(prompt('escribe una contraseña del 1 al 100'));

  //- Si el número introducido es igual a la contraseña, aparecerá en pantalla un mensaje indicando que ha ganado; si no, el mensaje indicará si la contraseña en un número mayor o menor al introducido y dará una nueva oportunidad.

  if (pass === randomNum) {
    console.log('Has acertado!!');
    break;
  }
  if (intentos === 1) console.log('No puedes pasar');
}
