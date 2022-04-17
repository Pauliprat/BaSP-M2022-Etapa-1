//2. Strings

 /* a. Crear una variable de tipo string con al menos 10 caracteres y
 convertir todo el texto en mayúscula (utilizar toUpperCase).*/
var string1_2a = "Otis keeps meowing, feed him.";
console.log("Solution_2a:", string1_2a.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y
generar un nuevo string con los primeros 5 caracteres guardando el
resultado en una nueva variable (utilizar substring).*/
var string1_2b = "But... i already did it";
var substring_2b = string1_2b.substring(0 , 5);
console.log("Solution_2b", substring_2b);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar
un nuevo string con los últimos 3 caracteres guardando el resultado en
una nueva variable (utilizar substring).*/
var string1_2c = "I think he is thisty";
//console.log(string1_2c.length);
var substring_2c = string1_2c.substring(17, 20);
console.log("Solution 2c:", substring_2c);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var string1_2d = "ok, you have to turn on the tap so he can drink water.";
var string2_2d = string1_2d.substring(0, 1).toUpperCase() + string1_2d.substring(1).toLowerCase();
console.log("Solution 2d", string2_2d); 

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
var string1_2e = "He seems happy now";
var firstSpace = string1_2e.indexOf(" ");
console .log("Solution 2e:", firstSpace);

/* f. Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras
en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var string1_2f ="i appreciate everything you do for him."
var letterPosition1 = string1_2f.indexOf("appreciate");
var letterPosition2 = string1_2f.indexOf("everything")
var letterPosition3 = string1_2f.indexOf("you")
var string2_2f = string1_2f.substring(0,2).toLowerCase() + string1_2f.substring(2,3).toUpperCase() + string1_2f.substring(3,13).toLowerCase()
+ string1_2f.substring(13,14).toUpperCase() + string1_2f.substring(14).toLowerCase();
console.log("Positions of appreciate:", letterPosition1 ,"Positions of everythig:", letterPosition2,"Positions of you:", letterPosition3);
console.log("Solution 2f:", string2_2f);