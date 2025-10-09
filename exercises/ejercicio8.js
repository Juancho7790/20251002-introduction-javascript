const lista = ["html", "css", "javascript", "react"];
const elementoBuscado = "javascript";
console.log(lista);

let encontrado = false;

for (let i = 0; i < lista.length; i++) {
    console.log(`Posición ${i}: "${lista[i]}"`);
    if (lista[i] === elementoBuscado) {
        encontrado = true;
        console.log("encontrado");
        break;
    }
}
if (!encontrado) {
    console.log("No se encontró el elemento");
}