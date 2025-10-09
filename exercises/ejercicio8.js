const tecnologias = ["html", "css", "javascript", "react"];
const elementoBuscado = "javascript";
console.log(tecnologias);

let encontrado = false;

for (let i = 0; i < tecnologias.length; i++) {
    console.log(`Posición ${i}: "${tecnologias[i]}"`);
    if (tecnologias[i] === elementoBuscado) {
        encontrado = true;
        console.log("encontrado");
        break;
    }
}
if (!encontrado) {
    console.log("No se encontró el elemento");
}