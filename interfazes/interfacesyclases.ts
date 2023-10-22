// implemtacion de interfaces en  clases en typescript

interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    peso: number;
}

// para pasar los atributos de la interfaz a la clase se usa implements no extends por que no hay herencia

class Alumno implements Persona {
    nombre: string;
    apellido: string;
    edad: number;
    peso: number;
    constructor(nombre: string, apellido: string, edad: number, peso: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.peso = peso;
    }
}

// implementation de interfaces en funciones en typescript obligan a que reciba los aprametro que se le determiann en la interfaz

interface addNumbers {
    (a: number, b: number): number;
}

let add: addNumbers;

add = ()=>{
    return 1;
}