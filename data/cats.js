function Cat(name, age, color) {
    this.name = name,
    this.age = age,
    this.color = color
}

const Pepzi = new Cat ("Pepzi,  4 , grey");
const  Sirap =  new Cat("Sirap, 10, orange");

export const catsRule = [Pepzi, Sirap];
