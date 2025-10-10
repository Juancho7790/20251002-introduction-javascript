const numeros = [1, 2, 3, 4, 5, 6];

const resultado = numeros.map(function(num) {
    if (num % 2 === 0) {
        return num * 2;  
    } else {
        return num;      
    }
});
console.log("lista original:", numeros);
console.log(" resultado:", resultado);

//.map() + Multiplicación Condicional