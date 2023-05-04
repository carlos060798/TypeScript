/* Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:
id
nombres
apellidos
teléfono
ubicaciones
ciudad
dirección 

Entregable: Lista de contactos en JavaScript
En tu repositorio de GitHub contact-list, crea un branch llamado review-1
Completa tu producto de lista de contactos para una revisión en vivo al grupo
Bonus: Añade una función que permita actualizar un contacto
Adjunta el link de tu solución en el campo a continuación 📦*/
let arraycontacto=[]
arraycontacto.push({id:arraycontacto.length+1,
    cedula:125755,
    nombres:"daniloangarita garcia",
    teléfono:3208847470,
    ubicaciones: "cll12av15",
    ciudad:"cucuta"
   })

function crearContacto(obj) { 
 arraycontacto.push(obj)
 
return console.log(arraycontacto)
} 

crearContacto({id:arraycontacto.length+1,
    cedula:15655,
    nombres:"carlos  garcia",
    teléfono:32088,
    ubicaciones: "cll12h5",
    ciudad:"armenia"
   })  

crearContacto({id:arraycontacto.length+1,
        cedula:15255,
        nombres:"danilo angarita garcia",
        teléfono:3208847470,
        ubicaciones: "cll12av15",
        ciudad:"pamplona"
       })  


console.log("elimiando el array")
function eliminarObjetoPorId( id) {
    const index = arraycontacto.findIndex(objeto => objeto.id === id);
    if (index > -1) {
        arraycontacto.splice(index, 1);
    }
    return console.log(arraycontacto);
  } 

  eliminarObjetoPorId(3)