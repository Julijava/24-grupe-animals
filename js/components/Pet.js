class Pet {
    constructor(name, color, saound) {
        this.breed = 'Unknown animal';
        this.name = name;
        this.color = color;
        this.sound = 'Au miau nom 🐶🐱🐹!';
    }

    voice() {
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);

    }

    introduce() {
        console.log(`Hi, I am ${this.name}, my fur is ${this.color} and I say ${this.sound}`);

    }

}

export { Pet }