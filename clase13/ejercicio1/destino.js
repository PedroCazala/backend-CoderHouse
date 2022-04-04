"use strict";

//voy viendo 35min
// const lista = [2,3,5,7]
// lista.map(x=>x*x).forEach(x=>console.log(x))
// ejercicio 1 ||
// TODO: Realizar un programa que genere un color aleatorio en formato RGB (canal rojo, verde y azul entre 0 y 255) y lo muestre por consola. Este estará implementado en un archivo llamado color.js 
// La funcionalidad debe estar implementada dentro de una clase y deberá utilizar sintaxis ES6 (const, let, arrow function y template string).
// Convertir este código ES6 a JS5 con Babel online. Realizar esta conversión en forma automática dentro de un proyecto node.js que utilice Babel CLI
var obtenerColor = function obtenerColor() {
  var max = 250;
  var min = 0;
  var rojo = parseInt(Math.random() * (max - min) + min);
  var verde = parseInt(Math.random() * (max - min) + min);
  var azul = parseInt(Math.random() * (max - min) + min);
  return "rgb(".concat(rojo, " ").concat(verde, " ").concat(azul, ")");
};

console.log(obtenerColor());
