import { Fish } from './Fish.js';

class GoldFish extends Fish {
    constructor(name, color, grantsWishes) {
        super(name, color)
        this.breed = "Goldfish";
        this.grantsWishes = this.grantsWishes ?? false;
        this.sound = 'Bul bul 🐠 🐠...';
    }

    makeWish(wish) {
        if (!this.grantsWishes) {
            console.log(`${this.breed} ${this.name} doesn't grant your wishes...`);
            return false;
        }
        console.log(`${this.breed} ${this.name} grants your wish ${wish}!`);
    }
}

export { GoldFish }