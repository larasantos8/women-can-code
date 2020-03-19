class Carro{
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }
    acelerar(){
        return "acelerou";
    }

    freiar(){
        return "freiou";
    }
}


const camaro = new Carro("fox", "quadrado", "preto");
const fusquinha = new Carro("fusca", "redondinho", "azul");
console.log(fusquinha.acelerar);
console.log(camaro.freiar);
console.log(fusquinha);
console.log(camaro);