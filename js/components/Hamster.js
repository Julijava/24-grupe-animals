class Hamster {
    constructor(name, color, saound) {
        this.name = name;
        this.color = color;
        this.sound = 'Nom nom 🐹🐹!';
        this.canEatTillDeath = true;
    }

    voice() {
        console.log(`${this.name} says: ${this.sound}`);

    }

    introduce() {
        console.log(`Hi, I am ${this.name}, my fur is ${this.color} and I say ${this.sound}`);

    }

}

export { Hamster }