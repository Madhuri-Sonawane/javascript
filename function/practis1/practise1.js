
//function using function keyword takes a string as an arguement and return count the vovel in the string.

function countvowels(str){
    let count=0;
    
        for (const char of str){

         if(
         char=== "a"|| char==="A"|| 
         char==="e" ||char==="E"||
         char==="i"|| char==="I"||
         char==="o" ||char==="O"||
         char==="u"||char==="U"
         ) {
            count++;
         }
    }
    console.log( count);
}

countvowels("ApnaCOllegE");
countvowels("JavaScript");

//in arrowfunction
console.log("arrow function for same question:");

const countvw =(str)=>{

    let count=0;
    
    for (const char of str){

     if(
     char=== "a"|| char==="A"|| 
     char==="e" ||char==="E"||
     char==="i"|| char==="I"||
     char==="o" ||char==="O"||
     char==="u"||char==="U"
     ) {
        count++;
     }
}
console.log( count);
}

countvowels("ApnaCOllegE");
countvowels("JavaScript");


