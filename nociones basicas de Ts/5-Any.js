"use strict";
// simpre limintar su uso al que sea estrictamente nesesario 
let data = 123;
data = "123";
data = { name: "luis" };
data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
data = false;
data = new Date();
data = Math.random() * 10;
/* los any no valen nada por ende para poder definir el comportamiento de un any
 en su valor se puede hacer del siguiente forma conocida como casteo
que es basicamente  artribuirle un valor por defoult sin ques te sea contante */
let data2 = 123;
// forma 1 de castear
console.log(data2.charAt(2));
// forma 2 de castear
console.log(data2.charAt(2));
