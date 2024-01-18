
//to print text which is in the div

let div = document.querySelector("div");
 let a=div.innerText;

console.dir(div);

console.log(a);

let b =div.innerHTML;
console.log(b);

//in innerText: it include only text inside the div 
//in innerHtml: it include not only text but also html format also.
//we can change the html and content in run time dynamically

//eg:

div.innerText="hello";

//textContent:textContent is also work for hidden element.

let head= document.querySelector("h1");

console.dir(head);

let d = head.textContent;
console.log(d);

//this properties are used to DOM manipulation
