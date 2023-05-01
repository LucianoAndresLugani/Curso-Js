//lista ejercicio

// Variable con la lista de la compra
let listaCompra = ["Leche", "Pan", "Huevos", "Frutas", "Verduras"];
console.log(listaCompra);

// Añadir "Aceite de Girasol" a la lista de la compra
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);
// Eliminar "Aceite de Girasol" de la lista de la compra
listaCompra.splice(5,1);
console.log(listaCompra);
// Lista de tus 3 películas favoritas con sus propiedades
let peliculasFavoritas = [
  {titulo: "El Padrino", director: "Francis Ford Coppola", fecha: 1972},
  {titulo: "El Señor de los Anillos", director: "Peter Jackson", fecha: 2001},
  {titulo: "La La Land", director: "Damien Chazelle", fecha: 2016}
];

// Lista de películas posteriores al 1 de enero de 2010
let peliculasPosteriores2010 = peliculasFavoritas.filter(pelicula => pelicula.fecha > 2010);
console.log(peliculasPosteriores2010);
// Lista de los directores de la lista de películas original
let directoresPeliculas = peliculasFavoritas.map(pelicula => pelicula.director);
console.log(directoresPeliculas);
// Lista de los títulos de la lista de películas original
let titulosPeliculas = peliculasFavoritas.map(pelicula => pelicula.titulo);
console.log(titulosPeliculas);
// Concatenar la lista de directores y la lista de los títulos utilizando concat
let listaConcatenada = directoresPeliculas.concat(titulosPeliculas);
console.log(listaConcatenada);
// Concatenar la lista de directores y la lista de los títulos utilizando el factor de propagación
let listaConcatenadaSpread = [...directoresPeliculas, ...titulosPeliculas];
console.log(listaConcatenadaSpread);