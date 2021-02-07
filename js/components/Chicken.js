import { Bird } from './Bird.js';

class Chicken extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Chicken';
        this.sound = 'Cip cip 🐔🐔!';
    }
}

export { Chicken }

