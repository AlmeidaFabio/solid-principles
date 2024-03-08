// Liskov Substitution Principle (Princípio da Substituição de Liskov):

// Suponha que temos uma hierarquia de classes representando formas geométricas. Qualquer subclasse deve ser substituível por sua classe base sem afetar o comportamento do programa:

class Shape {
    area() {
        throw new Error('Método area() deve ser implementado');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
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

function calculateTotalArea(shapes) {
    return shapes.reduce((total, shape) => {
        return total + shape.area();
    }, 0);
}

const shapes = [
    new Rectangle(5, 10),
    new Square(4)
];

console.log('Área total:', calculateTotalArea(shapes));
