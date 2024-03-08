// Interface Segregation Principle (Princípio da Segregação de Interfaces):

// Vamos supor que temos uma interface Animal que define métodos para diferentes comportamentos de animais. No entanto, nem todos os animais implementam todos os métodos. Podemos dividir a interface em interfaces menores e mais específicas:

// Interface original
class Animal {
    walk() {
        throw new Error('Método walk() deve ser implementado');
    }

    fly() {
        throw new Error('Método fly() deve ser implementado');
    }

    swim() {
        throw new Error('Método swim() deve ser implementado');
    }
}

// Interfaces segregadas
class Walkable {
    walk() {
        throw new Error('Método walk() deve ser implementado');
    }
}

class Flyable {
    fly() {
        throw new Error('Método fly() deve ser implementado');
    }
}

class Swimmable {
    swim() {
        throw new Error('Método swim() deve ser implementado');
    }
}

class Bird extends Animal {
    walk() {
        console.log('Andando...');
    }

    fly() {
        console.log('Voando...');
    }
}

class Fish extends Animal {
    swim() {
        console.log('Nadando...');
    }
}

const bird = new Bird();
bird.walk();
bird.fly();

const fish = new Fish();
fish.swim();
