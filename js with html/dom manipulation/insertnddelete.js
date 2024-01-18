
//if u want to add new element then u have to create that element first 

// let newElement = document.createElement("the Elament which u want to create");

//let's create a new button 

let newbtn = document.createElement("button");
newbtn.innerText="click me";// it is used to add text in new element
console.dir(newbtn);

let div= document.querySelector("div");

div.append(newbtn);

div.prepend(newbtn);

div.before(newbtn);

div.after(newbtn);

//by using this nodes or methods we can add other element aslo like heading,p,etc.

let para = document.createElement("p");

para.innerText ="knvsdjns vsdsjfwe dfiedjqok CEFDEJK SDQWDE daweqw dweqkmcnfe sdjfisewwm";

console.log(para);

div.after(para); 

let newhead = document.createElement("h1");

newhead.innerText= "hello";

console.log(newhead);
para.before (newhead);

//now how to delete element

// let para1= document.querySelector("p");
// para1.remove();

let child = document.createElement("h2");

child.innerText="hiii";
console.log(child);

newhead.appendChild(child);

