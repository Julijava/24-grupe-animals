class Bird {
    constructor(name, color) {
        this.breed = "Unknown bird";
        this.environment = 'can fly';
        this.name = name;
        this.color = color;
        this.sound = 'Cip cveep Wuup zzzzzz 🐔🦜🦅🐉';
                            }
        
    voice() {
        console.log(`${this.breed} ${this.name} says: ${this.sound}`);
            }

    introduce() {
        console.log(`Hi, I am ${this.name}, my wings are ${this.color} and I say ${this.sound}`);
                }

            }

    export { Bird }