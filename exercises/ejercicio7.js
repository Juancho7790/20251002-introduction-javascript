const notas = [3.2, 4.5, 2.8, 5.0, 4.1];

console.log("notas registradas:");
console.log(notas);
console.log(`Total de notas: ${notas.length}\n`);

let sumaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    console.log(`Nota ${i + 1}: ${notas[i]}`);

    sumaNotas += notas[i];
}

const promedio = sumaNotas / notas.length;

console.log(`Promedio: ${promedio.toFixed(2)}`);