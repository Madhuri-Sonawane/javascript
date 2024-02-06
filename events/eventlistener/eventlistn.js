let btn1 = document.querySelector("button");

btn1.addEventListener("click",(evt)=>{
    console.log("Button was clicked-handler1")
});
btn1.addEventListener("click",(evt)=>{
    console.log("Button was clicked-handler2")
});
const handler3=()=>{
    console.log("Button was clicked-handler3");
};
btn1.addEventListener("click",handler3);
    

btn1.addEventListener("click",(evt)=>{
    console.log("Button was clicked-handler4")
});
btn1.addEventListener("click",(evt)=>{
    console.log("Button was clicked-handler5")
});

//by addEventlistener we can add the action which we want to on clicking buttons or submitting form ,etc

//as similar we can remove the listener

btn1.removeEventListener("click",handler3);
