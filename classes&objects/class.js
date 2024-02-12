
//class is a blueprint for object
//class MyClass{ constructor(){.....} myMethod(){.....}} we can create object using  let myObj=new newObj()
//when we want to create object in bulk means in repetative manner then we used class there 
class car {
    start(){
        console.log("start car");
    }
    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand=brand;
    }
}

let fortuner = new car();
fortuner.setBrand("fortuner");
let lexus =new car();
lexus.setBrand("lexus");