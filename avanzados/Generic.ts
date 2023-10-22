/*En TypeScript, los genéricos (generics) son una característica que permite escribir código que es independiente del tipo de datos. En otras palabras, te permiten crear funciones, clases e interfaces que pueden trabajar con diferentes tipos de datos sin perder información sobre esos tipos. Los genéricos permiten escribir código más flexible y reutilizable.
Características de los Genéricos en TypeScript:

    Flexibilidad: Los genéricos permiten a las funciones y clases trabajar con cualquier tipo de datos, lo que aumenta la flexibilidad del código.

    Seguridad de tipos: Aunque los genéricos son flexibles, TypeScript proporciona seguridad de tipos. Puedes especificar el tipo de datos esperado cuando utilizas un genérico y TypeScript se asegurará de que se utilice correctamente.

Ejemplos de Casos Reales de Uso:
Funciones Genéricas:

typescript
*/

function imprimirElemento<T>(elemento: T): void {
    console.log(elemento);
}

imprimirElemento(5); // Salida: 5
imprimirElemento("Hola, mundo!"); // Salida: Hola, mundo!
/*
En este caso, la función imprimirElemento es genérica y puede imprimir cualquier tipo de dato.
Clases Genéricas:

typescript
*/
class Almacen<T> {
    private items: T[] = [];

    agregar(item: T): void {
        this.items.push(item);
    }

    obtenerTodos(): T[] {
        return this.items;
    }
}

const numeros = new Almacen<number>();
numeros.agregar(1);
numeros.agregar(2);
console.log(numeros.obtenerTodos()); // Salida: [1, 2]

const palabras = new Almacen<string>();
palabras.agregar("hola");
palabras.agregar("mundo");
console.log(palabras.obtenerTodos()); // Salida: ["hola", "mundo"]

/*La clase Almacen es genérica y puede almacenar y recuperar cualquier tipo de dato.
Interfaces Genéricas:

typescript*/

interface Par<T, U> {
    primero: T;
    segundo: U;
}

const parNumerico: Par<number, string> = { primero: 1, segundo: "dos" };
const parTexto: Par<string, boolean> = { primero: "verdadero", segundo: true };

/*En este ejemplo, la interfaz Par es genérica y puede ser utilizada para definir pares de valores con diferentes tipos.
Ventajas de los Genéricos:

    Reutilización de código: Los genéricos permiten escribir funciones, clases e interfaces que son reutilizables para diferentes tipos de datos.

    Integridad del tipo: TypeScript proporciona seguridad de tipos incluso cuando se usan genéricos, lo que significa que el código sigue siendo seguro y libre de errores de tipos.

    Escritura de APIs flexibles: Los genéricos son fundamentales para escribir bibliotecas y APIs flexibles que pueden ser utilizadas con varios tipos de datos.

En resumen, los genéricos en TypeScript son una herramienta poderosa para escribir código flexible y seguro que puede manejar diferentes tipos de datos de manera eficaz y sin pérdida de información sobre los tipos.*/
