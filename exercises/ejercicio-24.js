const valores = [10, 20, 30, 40]; //arreglo de numeros

const sumaValores = valores.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
/*usamos el metodo .reduce() con acumulador: el cual hace la suma de los numeros
y el valorActual: muestra el numero en el que esta posicionado y despues de acumularlo pasa al siguiente numero*/
console.log(sumaValores); //muestra la suma de todo el arreglo