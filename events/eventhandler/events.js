
let button =document.querySelector("button");
console.log(button);

function clickme(){
    let button =document.querySelector("button");
    console.log("button was clicked");
    alert("hello,you clicked the button");
}

//the event in  js are used to perform a action which tells us about what is done by us
//the events mostly used for buttons action
//there are many types of events (refer on mdn event)

//now we will see the double click 
//if we double click it will perform the specific action
//like instgram like we double click on image and it give like and show heart sign on screen 

let btn2=document.createElement("button");
btn2.innerText="click me2!"
console.log(btn2);

button.after(btn2);
btn2.style.marginLeft="10px";
btn2.style.backgroundColor="green";



btn2.ondblclick= ( ) =>{
   
    alert("you clicked 2nd button");
}

//now this type of event used for mouser over
function div(){
    let div=document.querySelector("div");
    console.log("you are in div");
    
   
}


//we can also used inline event that we write event in html tag as an attribute 
//<div onmouseover="console.log('you are in div')">
//but this is not good way to write the code.
//if we handle code inline and in js too the priority of  js handle is more than inline
//we cannot handle one event two times it overwrite the first handler
