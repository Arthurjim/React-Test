const nombre = "Arturo";
const apellido = "Jiménez";
// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `
${nombre}
${apellido}
 `;

// console.log(nombreCompleto);


export function getSaludo(nombre = 'Invitado'){
    return 'hola ' + nombre
}
console.log(`Este es un text : ${getSaludo(nombre)}`)