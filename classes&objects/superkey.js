//super keyword is used to call the constructor of its parent class to access the parent's properties and methods


//properties tranfer from class 1 to another class i.e.parent to child



class person{
    constructor(){
        this.blood="red"; 
    }
    eat(){
        console.log("eat");
    }
   
}

class engineer extends person{
    constructor(branch){
        super();
        this.branch=branch;  
    }
    work(){
        super.eat();
        console.log("solve problem");    
    }
} 


let madhuri=new engineer("chemical engineer");
