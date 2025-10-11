//16. Destructuring en Objetos

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    info: function() {
        return `${this.marca} ${this.modelo} (${this.año})`;
    }
};

const { marca, año } = carro;
console.log(marca); 
console.log(año);