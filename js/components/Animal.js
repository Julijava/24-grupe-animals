class Animal {
    constructor(name, color, sound) {
        this.breed = 'Animal';
        this.environment = 'land, water, air';
        this.name = name;
        this.color = color;
        this.sound = 'Au miau nom cip cveep wuup zzz bul 🐶 🐱 🐹 🐔 🦜 🦅 🐲 🐟 🐠!';
    }

    voice() {
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);

    }

    introduce() {
        console.log(`Hi, I am ${this.name}, my fur is ${this.color} and I say ${this.sound}`);

    }

}

export { Animal }