 //create a website for your college.create a class user with 2 properties, name and eamil.
 //it also has a method called viewData()that allows user to view website data.

let Data="secret information";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data=",Data);
    }
}

let student1= new User("abc","abc@gmail.com" );
let student2=new User("def","def@gmail.com");

let teacher=new User("dean","dean@gmail.com");

//create a new class called admin which inherits from user.Add a new method called editData to admin that allows it to edit website

class admin extends User{
    constructor(name,email){
        super(name,email);
    }
editData(){
   Data="some new value"
}

}

let admin1 = new admin("admin","admin@gmail.com");