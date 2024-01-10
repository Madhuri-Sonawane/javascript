// arithmetic operators

let a=10;
let b= 5;
console.log("a=",a, "b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);

// unary operator

// increment

console.log("a=",a);
a++;
console.log( "a++=",a);

// decrement

console.log("b=",b);
b--;
console.log( "b--=",b);

// Assignment operators

a+4;
console.log("a+4=",a+4);

b-2;
console.log("b-2=",b-2);

// comparison operators

a==b;
console.log("a==b is" ,a==b);

a!=b;
console.log("a!=b is",a!=b);
 a<b;
 console.log("a<b is", a<b);
 a>b;
 console.log("a>b is",a>b);


//   logical operators
// and condition:it write true only when both conditions are true otherwise false
console.log("a==b && a<b is:",a==b && a>b );
// OR condition:it write false only when both are false othrwise true
console.log("a==b || a<b is:",a==b || a>b );
// not condition: if the condtion is true it write false and vie-versa

console.log(" !( a<b) is:", !( a<b));

//ternary operator:another way to write if-else statement
//condition?true output:false output

console.log("ternary operator condition?true output:false output");

let age=25;
let result=age >=18? "adult" :"not adult";
console.log(result);