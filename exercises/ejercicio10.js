function saludar(nombre = "Visitante") { 
  if (nombre === "Visitante") {
    console.log("Hola, Visitante");
  } else { 
    console.log(`Hola, ${nombre}`);
  }
}