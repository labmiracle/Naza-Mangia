interface EggLayer {
    layEggs(): void;
  }
  
  interface Flyer {
    fly(height: number): void;
  }
  
  interface Swimmer {
    swim(depth: number): void;
  }
  
  type BirdLike = EggLayer & Flyer;
  type FishLike = EggLayer & Swimmer;
  type Animal = BirdLike | FishLike;
  
  class Bird implements BirdLike {
    constructor(public species: string) { }
  
    layEggs(): void {
      console.log('Poniendo huevos de aves.');
    }
  
    fly(height: number): void {
      console.log(`Volando a una altura de ${height} metros.`);
    }
  }
  
  class Fish implements FishLike {
    constructor(public species: string) { }
  
    layEggs(): void {
      console.log('Poniendo huevos de pescado.');
    }
  
    swim(depth: number): void {
      console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
  }
  
  function getRandomAnimal(): Animal {
    const animals: Animal[] = [
      new Bird('Tero'),
      new Bird('Martín Pescador'),
      new Fish('Dorado'),
      new Fish('Bagre'),
    ];
  
    return animals[Math.floor(Math.random() * animals.length)];
  }
  
  function interrogateAnimal(animal: Animal = getRandomAnimal()): string {
    if ('fly' in animal) {
      animal.fly(10);
    }
  
    if ('swim' in animal) {
      animal.swim(10);
    }
  
    return (animal as Bird).species || (animal as Fish).species;
  }
  
  console.log(`¡Tenemos un ${interrogateAnimal()} en nuestras manos!`);
  
  