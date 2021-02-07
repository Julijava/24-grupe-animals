import { Dog } from './components/Dog.js';
import { Chicken } from './components/Chicken.js';
import { Parrot } from './components/Parrot.js';
import { Eagle } from './components/Eagle.js';
import { Dragonfly } from './components/Dragonfly.js';
import { Animal } from './components/Animal.js';

const rexas = new Dog('Rexas', 'brown');
console.log(rexas);

const chicken = new Chicken('Rokis', 'yellow');
console.log(chicken);
chicken.voice();
chicken.introduce();

const parrot = new Parrot('Ara', 'colorful');
console.log(parrot);
parrot.voice();
parrot.introduce();


const eagle = new Eagle('Agile', 'grey');
console.log(eagle);
eagle.voice();
eagle.introduce();


const dragonfly = new Dragonfly('Beauty', 'dark blue');
console.log(dragonfly);
dragonfly.voice();
dragonfly.introduce();
dragonfly.canTell();

const animal = new Animal('name', 'color');
console.log(animal);








