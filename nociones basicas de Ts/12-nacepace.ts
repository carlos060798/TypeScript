// cómo se define y utiliza un namespace en TypeScript:
// Definición de un namespace llamado MiNamespace
namespace MiNamespace {
    export interface Usuario {
        nombre: string;
        edad: number;
    }

    export function saludar(usuario: Usuario): string {
        return `Hola, ${usuario.nombre}!`;
    }

    export class Calculadora {
        sumar(a: number, b: number): number {
            return a + b;
        }
    }
}

// Uso del namespace MiNamespace
let usuario: MiNamespace.Usuario = { nombre: "Alice", edad: 30 };
console.log(MiNamespace.saludar(usuario)); // Salida: Hola, Alice!

let calc = new MiNamespace.Calculadora();
console.log(calc.sumar(5, 10)); // Salida: 15

//En este ejemplo, MiNamespace es un namespace que contiene una interfaz Usuario, una función saludar y una clase Calculadora. Todas estas entidades están encapsuladas dentro del namespace, lo que significa que están disponibles como propiedades del namespace y no contaminan el espacio global de nombres.

//Para utilizar las entidades del namespace, primero debes acceder al nombre del namespace seguido por el nombre de la entidad que deseas utilizar (MiNamespace.Usuario, MiNamespace.saludar, MiNamespace.Calculadora). También puedes utilizar export dentro del namespace para hacer que ciertas entidades estén disponibles fuera del namespace, como se hizo con la interfaz Usuario en el ejemplo.