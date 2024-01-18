let div = document.querySelector("div")
console.log(div);

let id= div.getAttribute("id");
console.log(id);

let name= div.getAttribute("name");
console.log(name);

//getAttribute this method is used to get the value of attribute in tags

//now, we can set the attributes value by setAttribute method

let para =document.querySelector("p");

console.log(para.setAttribute("class","newp"));

//to apply style to tags

let div1 = document.querySelector("div");

div.style.backgroundColor="red";

div.style.fontSize="26px";

div.style.height="200px";

 div.style.width="200px";

 div.innerText="hii,the text changed.";

 //