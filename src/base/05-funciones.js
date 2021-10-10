// funciones
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
 };
 
 //funcion flecha
 const saludos = (nombre) => `Hola, ${nombre}`;
 // saludar = 30

 
 export const getUser = () => ({ uid: "ABC12", username: "Arturin_12" });
 
 
 //Tarea
 
 export const getUsuarioActivo = (nombre) => ({
    uid: "ABC567",
    username: nombre,
 });
 
 const usuarioActivo = getUsuarioActivo("Jessica");
 