
//by creating normal function

 function time(){
     console.log("hello");
}
setTimeout(time,2000);

//by cretating arrow function

setTimeout(() => {
    console.log("this is arrow function");
}, 3000);

console.log("hey");
console.log("first");