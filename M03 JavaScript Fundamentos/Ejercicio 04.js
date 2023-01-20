/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   return (num*num);
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   return (num**3);
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   return (num**exponent);
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:

   //numf: es numero fixeado a 1 solo decimal
   var numf=num.toFixed(1);

   // restp se explica mejor con un ejemplo, supongamos num= 12,32321, con lo que numf=12,3
   // al multiplicar numf*10 queda un número entero, 123 y luego se le calcula el resto 
   // el cuál es igual a la parte decimal del número original: num
   var resto=(numf*10)%10;

   //numsd: es el número original pero sin parte decimal(sd)
   //la operación de abajo surge de: 12,3= 12 + 3/10, en donde:
   //Si teniendo en cuenta el ejemplo anterior: 123/10 obtenemos, divisor=10,cociente=12, dividendo=123 y resto=3
   //entonces: 12,3= 12 + 3/10
   // genéricamente: numf=numsd + resto/10
   // como lo que se busca es la parte entera se despeja numsd obteniendose lo siguiente:
   var numsd=numf-(resto/10);

   // si el número es entero la aproximación es la misma entonces queda el mismo número
   if (Number.isInteger(num)){var numero=num}

   // si el resto es menor a 5 y la parte entera no es 0 entonces se aproxima al anterior entero
   else if(resto<5 && numsd !=0){var numero=numsd-1}

   // si el resto es menor a 5 y la parte entera es 0 entonces se aproxima a 0
   else if(resto<5 && numsd ==0){var numero=0}

   // si el resto es mayor o igual a 5 se aproxima la parte entera se aproxima al siguiente número entero
   else {var numero=numsd+1}
   return numero;
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:

   // mismo proceso que en el ejercicio anterior con la diferencia que no nos interesa si resto es < o >= a 5
   var numf=num.toFixed(1);
   var resto=(numf*10)%10;
   var numsd=numf-(resto/10);

   if (Number.isInteger(num)){var numero=num}
   else{var numero=numsd+1}
   return numero;
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:

   // No entiendo como resolverlo sin usar argumentos en la función, tampoco entiendo que significa la deuolución del test en:
   // la línea 254 del código
   return Math.random();
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
