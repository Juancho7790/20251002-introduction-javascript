const nombres = ["ana", "luis", "pedro"]; //arreglo de nombres

nombres.map((nombre) => { //el metodo .map() recorre cada elemento del arreglo
    console.log(nombre.toUpperCase()); //usamos el metodo .toUpperCase() para convertir cada nombre a mayusculas
});