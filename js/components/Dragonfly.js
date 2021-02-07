import { Bird } from './Bird.js';

class Dragonfly extends Bird {
    constructor(name, color, imposter) {
        super(name, color);
        this.breed = 'Dragonfly';
        this.imposter = this.imposter ?? true;
        this.sound = 'zzzzzz.... 🐉🐲!';
    }

    canTell(lies) {
        if (!this.imposter) {
            console.log(`${this.breed} ${this.name} is imposter.`);
            return true;
        }
        console.log(`${this.breed} ${this.name} is ${this.imposter}!`);
        }
    }

export { Dragonfly }