
let marks=[85,97,44,37,76,60];

let sum=0;

for(let val of marks){
    sum+=val;
}

let average =sum/marks.length;
console.log(`The Average Marks of Class is ${average}.`);