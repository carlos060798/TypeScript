"use strict";
// sintaxis de una clase en typescript
class Herues {
    constructor(name, age, realName) {
        this.name = name;
        this.age = age;
        this.realName = realName;
    }
    // metodo privado solo es visible des la clase
    bio() {
        return `${this.name} ${this.age} ${this.realName}`;
    }
    // metodo publico es visible desde cualquier parte
    printBio() {
        return this.bio();
    }
}
const spaiderman = new Herues('Spiderman', 30, 'Peter Parker');
// herencia de clases en typescript 
class persona {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bio() {
        return `${this.name} ${this.age}`;
    }
    /* getter y setter en typescript
       get: permite obtener el valor de una propiedad
       set: permite cambiar el valor de una propiedad
    
    */
    get getBio() {
        // debe retornar el valor de la propiedad
        return this.bio();
    }
    set setName(name) {
        // debe recibir el valor de la propiedad
        this.name = name;
    }
}
class trabajador extends persona {
    constructor(name, age, Cargo) {
        super(name, age);
        this.Cargo = Cargo;
    }
}
const trabajador1 = new trabajador('Juan', 30, 'Programador');
