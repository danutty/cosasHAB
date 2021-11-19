'use strict';

// puntuaciones
const puntuaciones = [
  {
    equipo: 'Toros Negros',
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: 'Amanecer Dorado',
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: 'Águilas Plateadas',
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: 'Leones Carmesí',
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: 'Rosas Azules',
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: 'Mantis Verdes',
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: 'Ciervos Celestes',
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: 'Pavos Reales Coral',
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: 'Orcas Moradas',
    puntos: [2, 3, 3, 4],
  },
];

//Edita el archivo script.js para crear una función que reciba una array de objetos (equipos y puntos conseguidos) y muestre por consola el ** nombre ** del que más y del que menos puntos hayan conseguido, con sus respectivos ** totales **.

// creamos una funcion

function winlose(participantes) {
  let puntosTotales = [];
  let equipoGanador = 0;
  let equipoPerdedor = 0;
  let ganador = '';
  let perderdor = '';

  for (const point of participantes) {
    let total = 0;
    for (let index = 0; index < point.puntos.length; index++) {
      total += point.puntos[index];
    }
    puntosTotales.push(total);
    console.log(total);
  }

  for (let index = 0; index < puntosTotales.length; index++) {
    if (puntosTotales[index] > equipoGanador) {
      equipoGanador = puntosTotales[index];
      ganador = participantes[index].equipo;
    }
  }
  for (let index = 0; index < puntosTotales.length; index++) {
    if (puntosTotales[index] < equipoPerdedor || equipoPerdedor === 0) {
      equipoPerdedor = puntosTotales[index];
      perderdor = participantes[index].equipo;
    }
  }
  console.log(
    `El equipo ganador es ${ganador} con una puntuacion de ${equipoGanador}`
  );
  console.log(
    `El equipo perdedor es ${perderdor} con una puntuacion de ${equipoPerdedor}`
  );
}
winlose(puntuaciones);
