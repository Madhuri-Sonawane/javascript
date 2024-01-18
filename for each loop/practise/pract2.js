// array of marks of student. filter out of the marks that scored 90+.

let marks=[50,58,99,92,45,88,96,93,70,94];

let NewMarks=marks.filter((val)=>{
     
     return val>90;
}); 

console.log("NewMarks:",NewMarks);

//2. take a input from user as n. create array from 1 to n
//use reduce method to caqlculate sum of all numbers and product in array.

let n= prompt("enter the number");

let arr=[];
for(let i=1; i<=n;i++){
    arr[i-1]=i;
}
console.log("Array:",arr);

let sum=arr.reduce((prev,curr)=>{
  return prev+curr; 
  
});

console.log("Sum of Arr:", sum);

let product=arr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log("Product of Arr:", product); 
