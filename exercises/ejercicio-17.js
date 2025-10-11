const personas = [ //objeto con un arrayuy de personas y sus edades
    {nombre: "sofia", edad: 18},
    {nombre: "pedro", edad: 27},
    {nombre: "evelio", edad: 50},
];

for (let i = 0; i < personas.length; i++) { //ciclo paara recorrer el arrglo
    if (personas[i].edad >= 30){ //condicion para encontrar la primera persona mayor o igual a 30 años
        console.log(personas[i]); //mostramos la persona
        break; //se detiene el ciclo cuando encontramos la persona
    }
}

//justificacion: use un ciclo for y una condición if para buscar la primera persona con edad mayor o igual a 30