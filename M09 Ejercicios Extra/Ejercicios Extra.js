/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   return Object.entries(objeto);
   /* En clase:
   var matriz=[];
   for(prop in objeto){
      matriz.push([prop,objeto[objeto]])// primero pushea la prop y desp eñl valor
   }
   return matriz;
   */
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

      let objAlfab={};
      let arAlf=string.toLowerCase().split("").sort();
      for (let i=0; i< arAlf.length-1; i++ ){
        if(arAlf[i+1]!==arAlf[i]){
           objAlfab[arAlf[i]]=(arAlf.filter(letra=>letra===arAlf[i])).length;}}
      return objAlfab;
     // Nota: el test funcionaba pero no en orden alfabetico, lo cambiaste en el test y ahora anda

     /* Resolucion en clase:
     NOTA: a ellos no les pedía que esté en orden alfabetico, eso cambiaba en la consigna del video
     var objeto={};
     for( let i=0; i< string.lenth; i++){
      if (objeto.hasOwnProperty(string[i])){
         objeto[string[i]]=objeto[string[i]]+1;
      }
      else{
         objeto[string[i]]=1;
      }
      return objeto;
   }*/
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let enMayus="";
   let enMinus="";
   for (let letra of string){
      if(letra===(letra.toUpperCase())){enMayus+=letra; }
      else{enMinus+=letra;}
   }
   return enMayus.concat(enMinus);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let arFrase=frase.split(" ");
   let volteado=""
   for (let letra of arFrase){
      volteado+=(letra.split("")).reverse().join("");
      if (letra===arFrase[arFrase.length-1]){continue;}
      else{volteado+=" "}
   }
   return volteado;
}
/* En clases:
var newString=[];
for( var i=0; i<str.length; i++){
   newString.unshift(str[i])
}
return arStr.join("").split(" ").reverse().join(" ");
}


esto hace el for:[
  '!', 'e', 's', 'o', 'l', 'c',
  ' ', 's', 'i', ' ', 'e', 'g',
  'n', 'e', 'l', 'l', 'a', 'h',
  'C', ' ', 'y', 'r', 'n', 'e',
  'H', ' ', 'e', 'h', 'T'
]
arStr.join("").split(" ").reverse().join(" ");
el join: !esolc si egnellahC yrneH ehT
el split: [ '!esolc', 'si', 'egnellahC', 'yrneH', 'ehT' ]
el reverse: [ 'ehT', 'yrneH', 'egnellahC', 'si', '!esolc' ]
el join: ehT yrneH egnellahC si !esolc
*/
function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var reverso= numero.toString().split("").reverse().join("");
   if (numero==reverso){return "Es capicua"}else{return "No es capicua" }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return (string.split("").filter(letra=>letra!="a"&&letra!="b"&&letra!="c")).join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   /* 
   var decreciente=[];
   var a=arrayOfStrings;
   var tamaños=a.map(palabra=>palabra.length);
   var masGrande=tamaños.reduce((acc,item)=>{return Math.max(acc,item)});
   var indiceMax=tamaños.indexOf(masGrande);
   var i=0;

     do {
       if(a.length===1){
         decreciente.unshift(a[0]);
         break;}
       if(a[i].length===masGrande){
         decreciente.unshift(a[indiceMax]);
         a=a.filter(palabras=>palabras!=a[indiceMax]);
         tamaños=a.map(palabra=>palabra.length);
         masGrande=tamaños.reduce((acc,item)=>{return Math.max(acc,item)});
         indiceMax=tamaños.indexOf(masGrande);
         i=0;
       }
       else{i=i+1;}
     } while (a.length!=0);
     
  // Funciona pero se esperaa: [“You", "are", "looking", "beautiful"] y la funcion tuya devuelve:
  //[ 'are', 'You', 'looking', 'beautiful' ]
 
  return decreciente;

 */
return arrayOfStrings.sort(function(a,b){
   return a.length-b.length
})
// recibe 2 parametros:a,b y los compara segun el criterio
// que le demos en la funcion, en este caso el criterio es el largo
// de cada propiedad de izquierda a derecha.

/* Forma 2: con sort tambien:
return arrayOfStrings.sort(function(a,b){
   if(a.length > b.length){
      return 1
   }
   else if( a.length < b.length){
      return -1
   }
   else{
      return 0
   }
}

Forma 3: Bucle for anidado:

for( let i=0; i< arr.lenght; i++){
   for (let j=i+1; j<arr.length; j++){
      if( arr[i].length>arr[j].length){
         let aux=arr[i]
         arr[i]=arr[j]
         arr[j]=aux
         //hiciste enroque corto
      }
   }
}
return arr;
}
 ejemplo: agregando esto dentro del bucle: console.log("El valor de i es: "+i+", j es: "+j+" y el valor de arr es: "+arr);
 y pidiendo esto: console.log(sortArray(["Youre", "arere","arr", "s","beautiful", "looking"]));

 El valor de i es: 0, j es: 1 y el valor de arr es: Youre,arere,arr,s,beautiful,looking
El valor de i es: 0, j es: 2 y el valor de arr es: arr,arere,Youre,s,beautiful,looking
El valor de i es: 0, j es: 3 y el valor de arr es: s,arere,Youre,arr,beautiful,looking
El valor de i es: 0, j es: 4 y el valor de arr es: s,arere,Youre,arr,beautiful,looking
El valor de i es: 0, j es: 5 y el valor de arr es: s,arere,Youre,arr,beautiful,looking
El valor de i es: 1, j es: 2 y el valor de arr es: s,arere,Youre,arr,beautiful,looking
El valor de i es: 1, j es: 3 y el valor de arr es: s,arr,Youre,arere,beautiful,looking
El valor de i es: 1, j es: 4 y el valor de arr es: s,arr,Youre,arere,beautiful,looking
El valor de i es: 1, j es: 5 y el valor de arr es: s,arr,Youre,arere,beautiful,looking
El valor de i es: 2, j es: 3 y el valor de arr es: s,arr,Youre,arere,beautiful,looking
El valor de i es: 2, j es: 4 y el valor de arr es: s,arr,Youre,arere,beautiful,looking
El valor de i es: 2, j es: 5 y el valor de arr es: s,arr,Youre,arere,beautiful,looking
El valor de i es: 3, j es: 4 y el valor de arr es: s,arr,Youre,arere,beautiful,looking
El valor de i es: 3, j es: 5 y el valor de arr es: s,arr,Youre,arere,beautiful,looking
El valor de i es: 4, j es: 5 y el valor de arr es: s,arr,Youre,arere,looking,beautiful
[ 's', 'arr', 'Youre', 'arere', 'looking', 'beautiful' ]
Lo que hace es evaluar primero el lazo interno y una vez que se cierra el lazo(cuando j=5, ya que si vuelve a iterar
   j seria =6 y la condicion de lazo es j<arr.length, es decir, j<6 y al sumarle 1 ya no cumpliria)
   j=5, sale del ciclo for y ejecuta el for de afuera, sumandole 1 a i, y vuelve a entrar al for con j.

   Lo que va haciendo es comparar el elemento incial con todos los que le siguen, por eso siempre i=0 y j es la que va
   aumentando, entonces ahi te aseguras que en la posición 0 tenes el menor de todos, luego al salir del for con j,
   hace lo mismo pero ahora i=1, entonces compara el segundo elemento con los que quedan, y así suc.
   Como cada vez vas avanzando más son menos las iteraciones (ya que quedan menos elementos que comparar)
*/
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

      var arrMenor;
      var arrMayor;
      var union=[];
      if(array1.length<array2.length)
      {arrMenor=array1;
      arrMayor=array2;}
      else{ arrMenor=array2; 
         arrMayor=array1;}
         
      for( let i=0; i<arrMenor.length; i++){
   
         for( let j=0; j<arrMayor.length; j++){
            if ( arrMenor[i]===arrMayor[j]){
               union.push(arrMenor[i]);
            }
         }
      }
      return union;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
