const numeros = [3, 5, 7, 9, 11]; //arrglo de numeros

const encontrarNumero = numeros.find(numero => numero > 6); //usamos el metodo .find() para encontar el primer numero mayor a 6
if (numero => numero > 6) { //condicion para verificar si el numero es mayor a 6
    console.log("Encontrado " + encontrarNumero);
} else {
    console.log("No encontrado");
}