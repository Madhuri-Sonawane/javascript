
//properties tranfer from class 1 to another class i.e.parent to child

class parent {
    hello(){
         console.log("hello");
    }   
}

class Child extends parent{}

let child= new Child();


class person{
    constructor(){
        this.blood="red"; 
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class engineer extends person{
    work(){
        console.log("solve problem");
    }
}
class doctor extends person{
    work(){
        console.log("treatment");
    }
}
let doct = new doctor();
let madhuri=new engineer();
