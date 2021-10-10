//Arreglos

const arreglo = [1, 2, 3, 4];

let arreglo2 = [...arreglo,5];

const arreglo3 = arreglo2.map((num)=>{
    return num * 2
});
// arreglo2.push(5);
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

