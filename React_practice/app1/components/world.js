import computer from "./computer.js";

class world extends computer{
    
    constructor(name, place, age){
        super(name, place)
        this.age= age
    }
    run2(){
        console.log("Yay learned extends feature too in "+ this.name +" at "+ this.place + " in "+this.age);
    }
}

export default world