// given array of numbers, print the square of each value using forEach loop

let arr=[2,8,4,5,6,5,9];

arr.forEach ((val,idx)=>{
    num=val*val;
    console.log(val,"=",num);
})


//map is used to create new array
//map is a method of array

let newArr = arr.map((val)=>{
    return val*2;
});

//filter method: Create a new array of elements  on given condition

let meth=[1,5,36,85,44,42,36,25,14,18,16,12];

let evenarr =meth.filter((val)=>{
    return val%2 ==0;
   


});

console.log(evenarr);

// reduce method

let red=[1,5,3,6];

let output= red.reduce((res,curr)=>{
    return res+curr;
});

console.log(output);

//to print largest no.

output = red.reduce((res,curr)=>{
    return res>curr? res:curr;
});
console.log(output);
alert("hello this is a alert msg");