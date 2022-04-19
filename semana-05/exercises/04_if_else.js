// 4. If Else
// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje
//“Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.
var randomNumber_a = Math.random(0,1);
if (randomNumber_a >= 0.5) {
    alert('Greater than 0.5');
} else {
    alert('Lower than 0.5');
}
console.log("Solution 4a:", randomNumber_a);

// b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
    //  i. “Bebe” si la edad es menor a 2 años;
    //  ii. “Niño” si la edad es entre 2 y 12 años;
    //  iii. “Adolescente” entre 13 y 19 años;
    //  iv. “Joven” entre 20 y 30 años;
    //  v. “Adulto” entre 31 y 60 años;
    //  vi. “Adulto mayor” entre 61 y 75 años;
    //  vii. “Anciano” si es mayor a 75 años.
var randomAge = Math.round(Math.random() * 100);
  if (randomAge<2){
      alert('Bebe');
  } else if (randomAge>=2 && randomAge<=12){
      alert('Niño');
  } else if (randomAge>=13 && randomAge<=19){
      alert('Adolecente'); 
  } else if (randomAge>=20 && randomAge<=30){
      alert('Joven');
  } else if (randomAge>=31 && randomAge<=60){
      alert('Adulto');
  } else if (randomAge >=61 && randomAge<=75){
      alert('Adulto mayor');
  } else {
      alert('Anciano');
  }
console.log("Solution 4b:", randomAge);
