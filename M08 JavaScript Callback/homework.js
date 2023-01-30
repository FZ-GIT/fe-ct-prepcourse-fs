/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
/* Primer intento:
      var arr= nombre.split("");
      
      var primera=arr[0].toUpperCase();
      
      arr.shift();
      var concatenar=arr.join("");
      var primeraEnMayus=(primera.concat(concatenar));
      return primeraEnMayus;
*/
var arrNombre=nombre.split("");
for (var i=0; i<1; i++){
    arrNombre[i]=arrNombre[i].toUpperCase();
}
arrNombre=arrNombre.join("")
return arrNombre;

/* Nota: como solamente es la primera no hace falta un bucle para recorrerlo
pero para generalizarlo mas y poder convertir varias en mayus lo dejaste así
*/

// En clase:
/*

let primera=nombre[0].toUpperCase()

for(let i=1; i<nombre.length; i++){

   primera+=nombre[i]
}
return primera;


// otro método:

let primera=nombre[0].toUpperCase();
let resto= nombre.substr(1) //traer todos los elementos que quedan a partir de la posición 1
y tiene en cuenta la 1 --> si es "marcos", resto va a ser =arcos.

tmb se le puede poner substr(1,2), el 2 dice hasta donde sustrae, pero no tiene en cuenta el 2.

return primera+resto;

 */
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:

   return cb(num1,num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   let suma=0;
   for (let numeros of arrayOfNumbers){
      suma+=numeros;
   }
   cb(suma);
}
//Resolucion de clase:
/*

let resultado= arrayOfNumbers.reduce((acumulador,index)=> acumulador + index,0)

el acumulador recorre cada elemento del arreglo y a partir del index (indice) indicado, y 
lo que hace el recorrerlo es en acumulador le suma el valor del indice en el que se encuentra
la ,0 indica que comienza a iterar desde el principio, si fuese 1 comenzaria del 1 y así suc.
 */

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
  
   for( let elements of array){
      cb(elements);
   }
}
/* array.forEach(Element=>{cb(Element)}); */

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   let newArray=[];
   for( let elements of array){
      newArray.push(cb(elements));
   }
   return newArray;

}
/*
Forma 1: lo hizo como vos, con un for pero no of;
Forma 2: con un ForEach:

array.forEach(element => newArray.push(cb(element)))

//esto lo que hace es que por cada elemento => pushea al arreglo nuevo
que esta vacio el cb con elemento como parámetro.

Forma 3: con el map que pedian:




*/

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let filtrado=[];
   for ( let elementos of arrayOfStrings){
      if (elementos.startsWith("a")){filtrado.push(elementos)};
   }
   return filtrado;
}
/*
Con un ForEach:
let filtrado=[];
arrayOfStrings.forEach(element => {
   if (element[0] === "a"){fitrado.push(element)}
})

*/

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
