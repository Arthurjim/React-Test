//Objetos literales

const personas = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion:{
        ciudad:'New York',
        zip:4545454,
        lat:14.4355,
        lng:34.9233321
    }
 };
 
 // console.table(personas);
 console.log(personas);
 
 const personas2 = {...personas}
 personas2.nombre='Juan'
 console.log(personas);
 
 console.log(personas2);
 