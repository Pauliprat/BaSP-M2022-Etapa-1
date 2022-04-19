// 5. For
/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle
for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
var thingsICook = ["pizza", "pasta", "tacos", "pie", "milanesa"];
for (var i=0; i <= thingsICook.length - 1; i++){
    alert(thingsICook[i]);
}
console.log("Solution 5a:", thingsICook)

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar
una alerta por cada palabra modificada.*/
for (var i=0; i <= thingsICook.length - 1; i++){
    alert(thingsICook[i].substring(0,1).toUpperCase() + thingsICook[i].substring(1));
}

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto
a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
Al final mostrar una única alerta con la cadena completa.*/
var sentence = [];
for (var i=0; i <= thingsICook.length - 1; i++) {
    sentence = thingsICook;
}
alert(sentence);


/* d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número
de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos
dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el
array final (utilizar console.log).*/

var empty = [];
for (var i=0; i <= 10 - 1; i++) {
    empty.push(i);
}
alert(empty);
