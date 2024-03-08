// Single Responsibility Principle (Princípio da Responsabilidade Única):

// Imagine que temos uma classe Car que é responsável por representar um carro e calcular o custo do seguro. Podemos dividir isso em duas classes distintas para separar as responsabilidades:

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}

class InsuranceCalculator {
    static calculateInsuranceCost(car) {
        // lógica para calcular o custo do seguro
        return 1000; // apenas para fins de exemplo
    }
}

const myCar = new Car('Toyota', 2022);
const insuranceCost = InsuranceCalculator.calculateInsuranceCost(myCar);
console.log(`O custo do seguro para ${myCar.model} é ${insuranceCost}`);
