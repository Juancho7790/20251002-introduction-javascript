function saludar(nombre = "Visitante") { 
  if (nombre === "Visitante") { 
    console.log("Hola, Visitante");
  } else { //condicion por si no  usamos el parametro por defecto y usamos un nombre
    console.log(`Hola, ${nombre}`);
    
  }
}
saludar();  
saludar("Juan");

//Crea una función saludar(nombre = "Visitante").