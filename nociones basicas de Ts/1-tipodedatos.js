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
/*en este ejemplo se evidencia que typescript no asgna ningun valor p´ropiedad des de objetos inexistentes pero en cambio en js
le atribuye valores  de undefined

La propiedad 'location' no existe en el tipo '{ name: string; age: number; }'.ts(2339)
const user = {
    name: "Daniel",
    age: 26,
  };
  user.location;
*/

let  arr=new Array([1,2])
console.log(arr)