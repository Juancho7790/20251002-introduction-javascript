//.filter() + Condición Compleja

const nombres = ["ana","luis","pedro","sol","andres"];

const resultado = nombres.filter(nombre => { //usamos .filter() para recorrer el arreglo
    return nombre.length > 4 && nombre.includes("a"); //retornamos el nombre que tiene mas de 4 letras y que comienza con la letra a
});
console.log(resultado);
