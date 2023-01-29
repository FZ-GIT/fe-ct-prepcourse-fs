/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre,apellido,edad,domicilio){
      this.nombre=nombre;
      this.apellido=apellido;
      this.edad=edad;
      this.domicilio=domicilio;
   }

   detalle (){
      let objeto={};
      objeto.nombre=this.nombre;
      objeto.apellido=this.apellido;
      objeto.edad=this.edad;
      objeto.domicilio=this.domicilio;
      return objeto;

   }
   // podría hacerlo con herencia creo, desp intentalo 
   // o pregunta

   // en clase:
   /* el método detalle es:
   detalle(){
      return {
         nombre: this.nombre,
         apellido: this.apellido,
      }
   }
   lo hizo creando un objeto y declarando sus propiedades y
   valores, vos lo que hiciste es crear un objeto vacio y
   luego le agregaste las propiedades*/ 
}

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:

   var NuevaPersona= new Persona(nombre, apellido, edad, domicilio);
   return NuevaPersona;
}

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:

   Persona.prototype.datos= function(nombre,edad){
      return this.nombre+", "+this.edad+" años";
   }

   // idem pero en function() no coloca parametros
   // con esto `${}` podes concatenar strings con js.
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
