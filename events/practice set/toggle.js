//create toggle button that changes the screen to dark mode when clicked and light -mode when clicked again

let btn1=document.querySelector("#btn1");

let currMode="light"; 
let body= document.querySelector("body");
btn1.addEventListener("click",(evt)=>{
    if(currMode=== "light"){
        currMode="dark"
       body.classList.add("dark");
       body.classList.remove("light");

    }else {
       currMode="light";   
     body.classList.add("light");
     body.classList.remove("dark");
    }

    console.log(currMode);
}); 