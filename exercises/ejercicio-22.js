const palabras = ["sol", "montaña", "mar", "cielo"]; //arreglo de palabras 

const filtrarPalabras = palabras.filter(palabras => palabras.length > 4); /*usamos el metrodo .filter() para filtrar las 
palabras mayores a 4 letras*/
console.log(filtrarPalabras)