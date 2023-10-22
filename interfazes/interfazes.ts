// interfaz  son estruturas de datos bases que definen la forma de un objeto para que este pueda ser implementado por una clase
// los tipos de datos de una interfaz son extendibles  mientras que  el tipo no lo es
interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    peso: number;
}

const  persona2: Persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    peso: 70
}

// las interfaces pueden  tener matrizes de mas de un nivel por lo cual no es recomendable anidarlas en mas de dos niveles

interface Contacto {
    nombre: string;
    apellido: string;
    edad: number;
    peso: number;
    direccion: {
        calle: string;
        numero: number;
    }
} 

const persona3: Contacto = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    peso: 70,
    direccion: {
        calle: 'Av. Siempre viva',
        numero: 123
    } 

}

// lo recomendable es usar varias interfazes por separado y no anidadas para evitar confusiones

interface Contactos{
    name: string,
    apellido: string,
    edad: number,
    direccion: Direccion
}

interface Direccion {
    calle: string;
    numero: number;
}
const Contacto3: Contactos = {
    name: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: {
        calle: 'Av. Siempre viva',
        numero: 123
    } 
}

/*las interfaces tambien pueden recibir metodos como los tipos de datos 
 a difeencia de las clases las interfazes no tienen la logica para  procesar el  metodo solo evalua que el metodo exista en la clase que la implementa
 y que tenga los mismos parametros y el mismo tipo de dato de retorno
*/
interface Animal {
    nombre: string;
    edad: number;
    mostrar(id:string):string;
}

const gato: Animal = {
    nombre: 'gato',
    edad: 2,
    mostrar(id:string):string{
        return `El ${this.nombre} tiene ${this.edad} años`;
    }
}