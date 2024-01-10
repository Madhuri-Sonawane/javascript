 
 // strings are immutable while arrays are mutable
 let str= "JavaScript";

 console.log(str);
 //properties of string
 console.log("properties of string :");
 //to find the length of string
 console.log("length of JavaScript is :",str.length);
 //to find the indices of string str[0],str[1],str[2],...
 console.log( "str[3]in javascript is:",str[3]);
 console.log( "str[5]in javascript is:",str[5]);
 console.log( "str[2]in javascript is:",str[2]);
 console.log( "str[10] in javascript is:",str[9]);

 //template literals

 let specialString =` This is a Special String.`
 console.log(specialString);

 let obj={
    item: "pen",
    price:10
 };
 let output =` the cost of ${obj.item} is ${obj.price} rupees.`
 console.log(output);


 //escape characters: used to print string in next line
console.log("escape character eg:");
 console.log("apna \ncollege");
 //tab character:give space between two characters.
 console.log("tab character eg:");
 console.log("apna \t college");

 //string method/function
 console.log("string method:");

  let strng = "    apna  collge    ";
 newstr = strng.toUpperCase();
  console.log( newstr);

  newstr = strng.toLowerCase();
  console.log( newstr);
//method used to remove spaces from starting and at end
  newstr = strng.trim();
  console.log( newstr);

  //returns part of srting: slice

  console.log(strng.slice(0,5));

  //add two string in one line
   let res=str.concat(strng);
  console.log(res);
  