// 3 .Arrays

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
mostrar por consola los meses 5 y 11 (utilizar console.log).*/

var monthsOfTheYear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log ("Solution 3a:", monthsOfTheYear[4], ",",  monthsOfTheYear[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
var monthsOfTheYearAlfabetic = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 console.log("Solution 3b:", monthsOfTheYearAlfabetic.sort());

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
monthsOfTheYear.unshift("Diciembre");
monthsOfTheYear.push("Enero");
console.log("Solution 3c:", monthsOfTheYear);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
monthsOfTheYear.shift();
monthsOfTheYear.pop();
console.log("Solution 3d:", monthsOfTheYear);

// e. Invertir el orden del array (utilizar reverse).
var monthsOfTheYearReverse = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Solution 3e:", monthsOfTheYearReverse.reverse());

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log("Solution 3f:", monthsOfTheYear.join("-"));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log("Solution 3g", monthsOfTheYear.slice(4, 11));

