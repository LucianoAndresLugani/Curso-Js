
// Objeto con tus datos personales
const misDatosPersonales = {
    nombre: "Juan",
    apellido: "García",
    edad: 28,
    altura: 1.80,
    eresDesarrollador: true
  };
  console.log(misDatosPersonales);
  // Obtener la edad a partir del objeto anterior
  const miEdad = misDatosPersonales.edad;
  
  // Lista con objetos de datos personales
  const listaDatosPersonalesMisAmigos = [
    misDatosPersonales,
    {
      nombre: "María",
      apellido: "Pérez",
      edad: 27,
      altura: 1.65,
      eresDesarrollador: false
    },
    {
      nombre: "Carlos",
      apellido: "Gómez",
      edad: 29,
      altura: 1.75,
      eresDesarrollador: true
    }
  ];
  console.log(listaDatosPersonalesMisAmigos);
  
  // Lista ordenada por edad, de mayor a menor
  const listaOrdenadaPorEdad = listaDatosPersonalesMisAmigos.sort((a, b) => b.edad - a.edad);
  