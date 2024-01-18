//call html element by it's id and its class and with tag
let x = document.getElementById("heading");

console.dir(x);

let y = document.getElementsByClassName("head");

console.log(y);

let z = document.getElementsByTagName("div");

//query selector

console.log("use query selector");

//for single element

let a = document.querySelector("div");
console.log(a);

//for all element

let b = document.querySelectorAll("h5");
console.log(b);

//query selector write node list

let c =document.querySelector(".head");
console.dir(c);

let d = document.querySelector("#heading");
console.dir(d);

//properties
console.log("properties");

//tag name
let e= document.querySelector("p");
console.dir(e);

console.log(e.tagName);

//innerText:reutrns the text in tag

e= document.querySelector("p");
console.dir(e);

console.log(e.innerText); 