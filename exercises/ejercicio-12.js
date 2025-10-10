//Función Flecha que Cuente Vocales

const vocales = (texto) => { 
  let contador = 0; 
  for (let letra of texto){ 
    if ("aeiou".includes(letra)){ 
        contador++; 
    }
  }
  return contador; 
}

console.log(vocales("Hola mundo"));