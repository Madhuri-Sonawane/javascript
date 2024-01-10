
// strings are immutable while arrays are mutable
//arrays is collection of items- linear type to store item

//array create in[]
//array is one kind of object but we used index instead of keys in it.

let marks=[36,45,75,85,65,78];
console.log(marks);

//array indices
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);//undefined coz the length of arr is 6 and index start from 0 

//looping in array
//used to print all element in array
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);
// console.log(marks[5]);
// console.log(marks[6]); instead of this write loop
console.log("for loop to write each value :");

for(let idx=0; idx< marks.length;idx++){
    console.log(marks[idx]);
}
//another way to write is for of loop

console.log("for of loop:")
  
for(let mark of marks){
    console.log(mark);
}