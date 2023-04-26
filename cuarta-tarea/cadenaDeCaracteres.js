
/*
//Crea un archivo JS que contenga las siguientes líneas

//- Una cadena de texto con tu Nombre
let nombre="lucianoAndres";

//- Otra cadena de texto con tu Apellido

let apellido = "lugani" 

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = nombre+""+apellido
console.log(estudiante)

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus)
//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
*/
//- Una variable que contenga la primera letra del Nombre

//- Otra variable que contenga la última letra del Apellido

//- Una cadena de texto que elimine los espacios de la variable "estudiante"

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

const nombre = "Luciano";
const apellido = "Lugani";
const estudiante = nombre + " " + apellido;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const numLetras = estudiante.length;
const primeraLetra = nombre.charAt(0);
const ultimaLetra = apellido.slice(-1);
const estudianteSinEspacios = estudiante.replace(/ /g, "");
const nombreIncluido = estudiante.includes(nombre);
const apellidoIncluido = estudiante.includes(apellido);
