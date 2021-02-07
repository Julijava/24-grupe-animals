import { Bird } from './Bird.js';

class Parrot extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Parrot';
        this.sound = 'Cveep cveep 🦜🦜!';
    }
}

export { Parrot }