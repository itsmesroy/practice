class computer{
    constructor(name){
        this.name= name;
    }
    run(){
        console.log("You are here in computer")
    }
}

class world extends computer{
    
    constructor(name, place){
        super(name)
        this.place= place;
    }
    run2(){
        console.log("Yay learned extends feature too in "+ this.name +" at "+ this.place)
    }
}
const life= new world('Lenovo', 'Guwahati');
life.run2();
life.run();