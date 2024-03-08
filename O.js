// Open/Closed Principle (Princípio Aberto/Fechado):

// Vamos considerar uma classe Shape que representa diferentes formas geométricas. Queremos adicionar novas formas sem modificar a classe Shape original. Para isso, podemos usar herança:

class Shape {
    area() {
        throw new Error('Método area() deve ser implementado');
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const square = new Square(5);
console.log('Área do quadrado:', square.area());

const circle = new Circle(3);
console.log('Área do círculo:', circle.area());
