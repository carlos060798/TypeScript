// los objetos en tyscript  Los tipos de objetos también pueden especificar que algunas o todas sus propiedades sean opcionales . 
//Para hacer esto, agregue un ?después del nombre de la propiedad:
function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });