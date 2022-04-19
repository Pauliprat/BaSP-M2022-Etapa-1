// Funciones

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
function addition (num1, num2) {
	return num1 + num2;
}
var total = addition(3, 3)
console.log("Solution 6a:", total);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar
una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/
function additionNum (num1, num2) {
	if (isNaN(num1) || isNaN(num2)) {
		alert("Solution 6b:" + "One of the parameters is not a number");
		return NaN;
	} else{
    return num1 + num2;
  }
}
console.log("Solution 6b:", additionNum(3, 'b'));

// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function integerNum (num) {
	 if (Number.isInteger(num)){
		return true;
	}
}
console.log("Solution 6c:", integerNum(3));
   
/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya
decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/

function additionValidInteger (num1, num2) {
	if (isNaN(num1) || isNaN(num2)) {
		alert("Solution 6d:" + "One of the parameters is not a number");
		return NaN;
		} else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
	  	alert("Solution 6d:" + "One of the parameters is not a integer number");
		  return Math.round(num1 + num2);
		} else {
	  	return num1, num2;
		}
}
console.log("Solution 6d:", additionValidInteger(3.3, 3));


// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function additionValidInteger2 (num1, num2) {
	if (isNaN(num1 || num2) || isNaN(num2)) {
		alert("Solution 6d:" + "One of the parameters is not a number");
		return NaN;
		} else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
	  	alert("Solution 6d:" + "One of the parameters is not a integer number");
		  return Math.round(num1 + num2);
    }
}
function addition2 (num1, num2) {
  if (Number.isInteger(num1 && num2)){
    return num1 + num2;
  } else {
    return additionValidInteger2(num1, num2);
  }
}
console.log("Solution 6e:", addition2(3,3.3));