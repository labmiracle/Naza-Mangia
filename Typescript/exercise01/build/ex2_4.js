"use strict";
class Bird {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de aves.');
    }
    fly(height) {
        console.log(`Volando a una altura de ${height} metros.`);
    }
}
class Fish {
    constructor(species) {
        this.species = species;
    }
    layEggs() {
        console.log('Poniendo huevos de pescado.');
    }
    swim(depth) {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}
function getRandomAnimal() {
    const animals = [
        new Bird('Tero'),
        new Bird('Martín Pescador'),
        new Fish('Dorado'),
        new Fish('Bagre'),
    ];
    return animals[Math.floor(Math.random() * animals.length)];
}
function interrogateAnimal(animal = getRandomAnimal()) {
    if ('fly' in animal) {
        animal.fly(10);
    }
    if ('swim' in animal) {
        animal.swim(10);
    }
    return animal.species || animal.species;
}
console.log(`¡Tenemos un ${interrogateAnimal()} en nuestras manos!`);
