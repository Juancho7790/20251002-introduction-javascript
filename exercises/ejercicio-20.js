const valor1 = Number("123"); //metodo number convierte un string a numero 
console.log(valor1, typeof valor1);

const valor2 = String(123) //metodo string convierte un numero a string
console.log(valor2, typeof valor2)

const valor3 = Boolean(0) //metodo boolean convierte un numero a boolean, osea 0 es false y cualquier otro numero es true    
console.log(valor3, typeof valor3)

const valor4 = Boolean("") //metodo boolean convierte un string a boolean, osea "" es false y cualquier cadena con algo es true
console.log(valor4, typeof valor4) //el typeof es para saber que tipo de dato es (solo lo escribo aca porque es lo mismo pa los otros)

//justificacion: use los metodos number, string y boolean para convertir los tipos de datos