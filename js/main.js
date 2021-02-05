import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js';

const rexas = new Dog('Rexas', 'brown');
const pukis = new Cat('Pukis', 'white');


console.log(rexas);
console.log(pukis);

rexas.voice();
pukis.voice();

rexas.introduce();
pukis.introduce();