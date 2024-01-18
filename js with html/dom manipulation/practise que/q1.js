
//create new element -button.bg-red, text-white
//insert btn as the 1st element in the body tag

let btn = document.createElement("button");

btn.innerText="click me";
 console.log(btn);

let div= document.querySelector("body");

div.append(btn);

btn.style.backgroundColor="red";
btn.style.color="white";
