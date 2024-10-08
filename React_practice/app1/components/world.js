
import Computer from "./computer.js";  

class World extends Computer {
    constructor(name, place, age) {
        super(name, place);
        this.age = age;
    }

    run2() {
        console.log("Yay learned extends feature too in " + this.name + " at " + this.place + " in " + this.age);
    }
}

export default World;
