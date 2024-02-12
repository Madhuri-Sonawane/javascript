
const student={
    name: "madhuri sonawane",
    marks :90.21,
printMarks:function(){
    console.log("marks=",this.marks);
},

};

//JS have a special object called prototype.
//prototype is an object, it is object in object it has special types and method
//if we define arr in js it has default prototype object
//we can make own prototypes too
//__proto__ we set using this syntax
//prototype is reference of an object.
//if object and prototype has same method it used objects method


const employee ={
    calcTax(){
        console.log("tax rate is 10%");
    },
    calcTax2:function(){
        console.log("tax rate is 50%"); 
        //both are correct way to write but we used first method
    }
};

const karan={
    salary:55000,

};

karan.__proto__ = employee;

