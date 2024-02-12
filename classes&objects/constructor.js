
//constructor is a reserve keyword
//constructor is a special method
//it is automatically invoked by new eg let obj= new my class();
//when we want to do something at the time of initialization it can do by the constructor


class car {
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }
    start(){
        console.log("start car");
    }
    stop(){
        console.log("stop");
    }

     
}

let fortuner = new car("fortuner",10);
console.log(fortuner);
let lexus =new car("lexus",12);
console.log(lexus);