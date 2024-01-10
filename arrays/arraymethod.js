//push method

//push():add the end 

console.log("push method :");

let arr=["apple","chilli",25,62,90,"orange"];

arr.push("chips",100,"hello");
 console.log(arr);

 //pop(): this method delete the item at the end

 console.log("pop method:");

 let item= ["apple","chilli","tomato","banana","orange"];
console.log(item);

let deleteditem = item.pop();
console.log(item);
 console.log(deleteditem);


 //convert arrays into string

 console.log("tostring method:");

 console.log(item);

 console.log(item.toString());
 //it doesn't change in original array it write new string

 //concat method
 console.log("concat method:");

 let concat=arr.concat(item);
 console.log(concat);

 //if u want add 2nd string first then write item.concat(arr)

 //unshift method(): add to start work like push 
 
 console.log("unshift method:")

 item.unshift("mirchi","kakadi")
 console.log(item);

 //shift method(): used to delete items
  console.log("shift()method:");
 let val=item.shift();
 console.log("deleted", val);

 //slice method: returns a piece of the array
console.log("slice method:")
 
let num=[1,2,5,4,89,56,41];

 console.log(num);

 console.log(num.slice(0,3));
 //it is also used to make a copy of array

 //splice method: it makes the changes in original array
 console.log("splice method:");

 console.log(num);

 console.log(num.splice(2,2,"hello",108));
 //eg: splice(sartidx, delelement,addelement)

 //when you just want to add element

 console.log(num.splice(4,0,"hii"));

 //delete element

 console.log(num.splice(4,1,));

 