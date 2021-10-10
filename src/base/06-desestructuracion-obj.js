// Desestructuracion de objetos
// Asignacion Desestructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
    rango: "Héroe",
 };
 
 // const { nombre, edad, clave } = persona;
 // console.log(nombre);
 // console.log(edad);
 // console.log(clave);
 
 const uContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
    // console.log(nombre,edad,rango)
 
    return {
       nombreClave: clave,
       anios: edad,
       latlng: {
          lat: 14.3548,
          lng: -12.5494,
       },
    };
 };
 
 const {
    nombreClave,
    anios,
    latlng: { lat, lng },
 } = uContext(persona);
 
 console.log(nombreClave, anios, lat);
 