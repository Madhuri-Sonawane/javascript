
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
btn2.innerText=""
console.log(btn2);