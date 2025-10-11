//Objeto con Método Interno
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    info: function() {
        return `${this.marca} ${this.modelo} (${this.año})`;
    }
};

// Usar el método
console.log(carro.info()); 