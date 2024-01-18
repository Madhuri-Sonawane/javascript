
// q1. create h2 heading element with inner text - "hello javascript".apend "from Apna College student" to this text using JS.
//append means add at last 

let a = document.querySelector("h2");
console.dir(a);

//a.innerText="Hello JavaScript from Apna College student"

//other way to write 

a.innerText= a.innerText + "from Apna College student!!!"


let b= a.innerText;
console.log(b);


//Q2. create 3 divs with common class name -"box".access them & add some unique text in each of them.

let divs = document.querySelectorAll(".box");

// console.log(divs[0]);

// console.log(divs[1]);

// console.log(divs[2]);

//divs[0].innerText="new unique value 1";
//divs[1].innerText="new unique value 2";
//divs[2].innerText="new unique value 3";

//we can also use for this

let idx=1;

for(div of divs){
    div.innerText=`new value ${idx}`;

    idx++;
}

console.log(divs);






