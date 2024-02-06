//event object is a special object that has details about the event
//all event handler have access to the event objects properties and methods
//eg. node.event=(e)=>{ //handle here}

function clickme(e){
   console.log(e);
}

let button = document.querySelector("button");

button.onclick=(e)=>{
    console.log(e);
}

//it will show you when you clicked the button
//we can print it on mouseover