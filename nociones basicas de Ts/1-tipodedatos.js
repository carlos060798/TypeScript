"use strict";
// Nociones basicas de variables 
/*
 * algunas caso de typescript a considerar
 1- las contantes tienen valor fijo pero las variables let solo tienen  la declaracion de tipo de dato
 const numero1: 10
 let numero2: number
 */
const numero1 = 10;
let numero2 = 20;
// simpre se debe colocar el tipo de dato por legibilidad
const numero3 = 30;
/*cuando en las variables no se declara el tipo de dato este se toma como eany es decir se espera cualquier tipo de dato en la variable
let numero6: any
*/
let numero6;
// en las funciones se debe declarar el tipo de parametro en la variable
function sumar(numero1) {
    console.log(numero1);
}