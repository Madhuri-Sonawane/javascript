//function is a block of code that performs a specific task

function myfunction() {

    console.log("My first Function Program.");
    console.log("Function in Java Script.");
}

myfunction();
//if i want to print this lines two time i called this function two times

myfunction();
//function help to decrease the redadancy.redadancy means repetation.

//parameter in function

function  mymsg( msg){
    console.log(msg);
}

mymsg("I Love JavaScript!");// we called arguements to msg we paased in called function.
//in above example, (msg) is a parameter of the funct mymsg.
//we can take multiple parameters.

//function-> 2 numbers sum

function sum(x,y){
    console.log("x+y =", x+y);
}
sum(15,90);

// return values of function
 function Return(x,y){
     sum=x+y;
     return sum;
 }
 let val= sum(52,46);
 console.log(val);

 //instead of this you can write like this

 function Return2(x,y){
    sum=x+y;
    return sum;
}
//let val= sum(52,46);
console.log(sum(45,45));

//once you write a "return" ,after this nothing will execute np matter whatever you write.
//parameters of function is local variable, scope->function's block