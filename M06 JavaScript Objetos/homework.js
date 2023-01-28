/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var gato={
      nombre: nombre ,
      edad: edad ,
      meow: function(){return "Meow!"},
   }
   return gato;

   // Codigo del repaso:
   // Si la propiedad  se llama igual que la Variable que recibe como valor
   // podes hacer lo de la linea 22 y 23, en lugar de la linea 11 y 12, respect
   // La linea 24 es una f(x) flecha
   // var gato={
      //nombre,
      //edad,
     // meow: () => "Meow!"
   //}
}

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var usuario={
      nombre: nombre,
      email: email,
      password: password,
   }
   return usuario;
}

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad]=null;
   return objeto;

   // Nota: se usa [propiedad] y no ["propiedad"] porque tiene que la propiedad se
   // tiene que llamar tal cuál la variable que se pasa como parámetro.
}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:

   //objeto[metodo]=function(){}
   //return objeto.metodo;
   
   //Comentario: entendiste mal el ejercicio la funcion no te aclaran que hace
   // pq no la tenes que definir, simplemente la tenes que invocar

   // Resolución clases: 
   // Forma 1:
   //var funcion=objeto[metodo]; //acá guardamos la funcion en una variable;
   // funcion()  // acá la invocamos

   //Forma 2:
   // objeto[metodo](); // esto es igual a la función (objeto.[metodo]) y ()
   objeto[metodo]();

}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   return objetoMisterioso.numeroMisterioso*=5;

   // Resolución clases:
   // return objetoMisterios["numeroMisterioso"]*5;
   //Nota: cuando conocemos  el nombre de la propiedad van entre
   //comillas como en este caso
}

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   return objeto;
}

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar True. Caso contrario, False.
   // Tu código:
   var valorEmail=objetoUsuario["email"];
   if (valorEmail!=null && valorEmail!=undefined){return true;}
   else return false;

   //Es definido cuando es distinto de null o de undefined
   //Resolución clase:
   // idem que vos pero vos creaste la var valorEmail para que no se te haga
   // un chorizo dentro del if
}

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar True. Caso contrario, False.
   // Tu código:
   var tieneProp=objeto.hasOwnProperty(propiedad);
   return tieneProp;

   //Resolución clase:
   // lo mismo pero no creo la var, directamente 
   //return objeto.hasOwnProperty(propiedad);
}
 

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar True. Caso contrario, False.
   // Tu código:
   if (objetoUsuario.password===password){return true;}
   else return false;
   
   // LO HIZO IGUAL
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password=nuevaPassword;
   return objetoUsuario;

   //lo resolvió igual
   // acotación: con Break notation seria
   // objetoUsuario["password"]=nuevaPASSWORD
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   var array=objetoUsuario["amigos"];
   array.push(nuevoAmigo);
   objetoUsuario["amigos"]=array;
   return objetoUsuario;

   // solucion de clase:
   //objetoUsuario.amigos.push(nuevoAmigo);
   // return objetoUsuario;
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como True.
   // Retornar el arreglo.
   // Tu código:

   //for (var usuarios in objetoMuchosUsuarios){
   //   usuarios["esPremium"]=true;
   //}
   //return objetoMuchosUsuarios;

   for( let usuarios of objetoMuchosUsuarios){
      usuarios["esPremium"]=true;
   }
   return objetoMuchosUsuarios;

   // esto lo habias intentado antes pero pusiste for off y es for of
   // te daba error y por eso te mandaste con for in, pero lo correcto es
   //hacer for off ya que es un arreglo (que contiene objetos) y para recorrer
   // objetos iterables (como los arrays) se usa for of
}

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   var posteos=objetoUsuario.posts;
   var suma=0;
      for ( var post of posteos){
         suma+=post["likes"];
      }
      return suma;
   
   /* En clase:
   Forma corta:

   En lugar de recorrer el array post alamacenandolo primero y luego con un
   for of, podrías haberlo recorrido con un forEach(ya que es un arreglo)

   objetoUsuario.posts.forEach(post=>suma+=post.likes)

   comentarioS;
   objetoUsuario.posts hasta acá tenemos el array posts que contiene objetos,
   por ej: posts=[mani{}, jamon{}, papitas{}]

   luego con el forEach que sigue recorre cada elemento de ese array, que en
   este caso son objetos
   
   La orden del forEach es post=>suma+=post.likes, es decir, cada elemento del
   array (cada objeto en este caso) acceda a su propiedad likes (por eso posts.like)
   y se lo sume a la variable suma, y así con cada elemento del array
   


   Forma larga: con lo que vimos antes en arrays

   let totalLikes=0;
   
   for(let i=0; i<objetoUsuario.posts.lenght; i++){
      totalLikes+=objetoUsuario.posts[i].likes
   }
   return totalLikes;
   */
   
}

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   /*objetoProducto["calcularPrecioDescuento"]=function(){return (this.precio-(this.precio*this.porcentajeDeDescuento))};
   no te salio
   */
  /*objetoProducto["calcularPrecioDescuento"]=function(){
   const descuento= objetoProducto.precio*objetoProducto.porcentajeDeDescuento;
   objetoProducto["PrecioFinal"]=objetoProducto.precio - descuento;
   return objetoProducto.PrecioFinal  
}
return objetoProducto;
*/
objetoProducto["calcularPrecioDescuento"]=function(){return (this.precio-(this.precio*this.porcentajeDeDescuento))};
return objetoProducto;

// si funcionaba, lo pasa es que la consigna no estaba clara, tenias que retornar
// el objeto y listo
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
