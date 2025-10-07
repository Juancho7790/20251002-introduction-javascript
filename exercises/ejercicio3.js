const rol = "admin";
console.log(`Rol asignado: "${rol}"\n`);

switch (rol) {
    case "admin":
        // Se ejecuta si rol === "admin"
        console.log("Acceso total");
        break; // break detiene la ejecución del switch
        
    case "user":
        // Se ejecuta si rol === "user"
        console.log("Acceso limitado");
        break;
        
    case "guest":
        // Se ejecuta si rol === "guest"
        console.log("Inicia sesión para continuar");
        break;
        
    default:
        // Se ejecuta si ningún case coincide
        // Es equivalente al 'else' en un if/else
        console.log("Rol no válido");
}