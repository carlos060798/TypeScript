"use strict";
// las funciones en typescript se declaran de la siguiente manera
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
// ejemplo de escritura de funciones 
function firstElement1(arr) {
    return arr[0];
}
function firstElement2(arr) {
    return arr[0];
}
/* tambien pueden establecer el tipo de valor de dato que recibe y que sale en este caso solo recibe datos sting y cualquier otro dads eroa un error
function greet2(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }
No se puede asignar un argumento de tipo "number" al parámetro de tipo "string".ts(2345)
greet 2(12);
*/
// si bien cuando se definen los parametro en typescript se puede definir el tipo de dato que se recibe y el tipo de dato que se retorna
//es posible establecer que estos sean opcionales    function  personas(persona:string,edad?:number){
function personas(persona, edad) {
    if (edad) {
        return `Hola soy ${persona} y tengo ${edad} años`;
    }
    else {
        return `Hola soy ${persona}`;
    }
}
// argumentos rest  son argumetos pasados no opcionales que se pueden pasar a una funcion ...m: number[]
function multiply(n, ...m) {
    return m.map((x) => n * x);
}
multiply(10, 1, 2, 3, 4, 5);
