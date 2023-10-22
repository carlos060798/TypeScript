// sintaxis de una clase en typescript
class Herues{
/* existen varios tipos de  acceso a los atributos de una clase 
   PRIVATE- Solo es visible desde la clase
    PROTECTED- Solo es visible desde la clase y sus subclases por extencion
    PUBLIC- Es visible desde cualquier parte hasta de la instancia de la clase
*/
 private name;

 protected age;
 public realName;

 constructor(name: string, age: number, realName: string){
    this.name = name;
    this.age = age;
    this.realName = realName;
 }
// metodo privado solo es visible des la clase
 private bio(){
     return `${this.name} ${this.age} ${this.realName}`;
 }

 // metodo publico es visible desde cualquier parte
  printBio(){
     return this.bio();
 } 


}

const spaiderman:Herues = new Herues('Spiderman', 30, 'Peter Parker');

// herencia de clases en typescript 

class persona {

    constructor(public name: string, public age: number){}
private bio(){
  return `${this.name} ${this.age}`;}

 /* getter y setter en typescript
    get: permite obtener el valor de una propiedad
    set: permite cambiar el valor de una propiedad
 
 */

    get getBio(): string{
    // debe retornar el valor de la propiedad
        return this.bio();
    }

    set setName(name: string){
        // debe recibir el valor de la propiedad
        this.name = name;
    }


}

class trabajador extends persona{

    constructor(name: string, age: number, public Cargo: string){
        super(name, age);
    }

}

const trabajador1:trabajador = new trabajador('Juan', 30, 'Programador');

// clases abstractas en typescript
// Son clases para  crear otras clases

abstract class Mutante{

    constructor(public name: string, public age: number){}

  
}

class Xmen extends Mutante{}

const wolverine:Xmen = new Xmen('Logan', 30);