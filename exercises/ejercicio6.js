let contador = 15;

while (contador >= 0) {
    
    // Verificamos si el número es múltiplo de 3
    // Un número es múltiplo de 3 si el residuo al dividir entre 3 es 0
    if (contador % 3 === 0) {
        console.log(contador);
    }
    contador--;
}