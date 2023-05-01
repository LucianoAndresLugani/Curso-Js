const hoy = new Date();
console.log(hoy)
// Fecha de tu nacimiento
const fechaNacimiento = new Date("1994-10-31");
console.log(fechaNacimiento)
// Variable que indica si hoy es más tarde que la fecha de tu nacimiento
const esDespuesDeMiNacimiento = hoy > fechaNacimiento;
console.log(esDespuesDeMiNacimiento)
// Día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento)
// Mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento)
// Año de tu nacimiento (con 4 dígitos)
const anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento)