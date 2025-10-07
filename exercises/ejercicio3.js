const rol = "admin";
console.log(`Rol asignado: "${rol}"\n`);

switch (rol) {
    case "admin":
        console.log("Acceso total");
        break; // break detiene la ejecución del switch
        
    case "user":
        console.log("Acceso limitado");
        break;
        
    case "guest":
        console.log("Inicia sesión para continuar");
        break;
        
    default:
        console.log("Rol no válido");
}