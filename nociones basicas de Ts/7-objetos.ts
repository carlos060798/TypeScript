// los objetos en tyscript  Los tipos de objetos también pueden especificar que algunas o todas sus propiedades sean opcionales . 
//Para hacer esto, agregue un ?después del nombre de la propiedad:
function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });


// creacion de objetos con tipos

let obj: { num: number ,age:number ,power:string[] } = { num: 5
    ,age: 25
    ,power: ["flying", "vision"]

};

// tipos personalizados en objetos con esta sintaxis puedo modificar los tipos en objetos que tienen la misma referencia sin nesesidad de teenr quemodificar algun dao ma sadelante sino le tipo solamente

type Hero={
   name : string,
   age?:number,
   powers:string[],
    getName:()=>string

}


let  batmant:Hero={
    name:"bruce",
    age:25,
    powers:["flying","vision"],
    getName(){
        return this.name;
    }
} 

// desestructuracion de objetos en ts

const avenger={
    nick:"samuel",
    ironman:"tony",
    vision:"paul",
    activo:true,
    poder: 1500
}

 const {nick,ironman,vision,activo,poder}=avenger;

 console.log(nick,ironman,vision,activo,poder);