
//create array to store companies
//a.remove first company
//remove uber and add ola in its place
//addamazon at the end

let companies=["bloomberg","microsoft","uber","google","IBM","netflix"];
console.log(companies);
let val = companies.shift();
console.log(val);

console.log(companies.splice(1,1,"OLA"));

let companie=["bloomberg","microsoft","uber","google","IBM","netflix"];
console.log(companie);
console.log(companie.splice(6,0,"Amazon"));

