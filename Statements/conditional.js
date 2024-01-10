// if statement
console.log("if statement");

let age= 14;
 if(age>=18){
    console.log("You can Vote!");
 }

 if(age<18){
    console.log("you can not vote");
 }

 let mode="dark";
 let color;
 if(mode==="dark"){
    color="black"
 }
 if(mode==="light"){
    color="white"
 }

 console.log(color);

//  if-else statement

console.log("if-else statement:");

//odd even number

let num=20;
 if(num%2===0){
    console.log( num ,"number is even");

 }else{
    console.log( num ,"number is odd");
 }

 //  if-else-else statement

console.log("if-else-if statement:");

age=14;

if(age<18){
    console.log("junior");
}else if(age>=18 && age<50){
    console.log("middle");
}else{
    console.log("senior");
}