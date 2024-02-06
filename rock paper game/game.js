let useerScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const genComputerChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
    
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawgame=()=>{
    console.log("Game was Draw!");
    msg.innerText="Game Draw!"
    msg.style.backgroundColor="violet";
};
const you= document.querySelector("#you");
const comp= document.querySelector("#comp");
const playGame=(userChoice)=>{
    console.log("Your Choice is",userChoice);
    you.innerText=`You Choose ${userChoice}`;

const compChoice = genComputerChoice();
    console.log("comp choice is", compChoice);
    comp.innerText=`Computer Choose ${compChoice}`;
    if(userChoice===compChoice){
        drawgame();
    } else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin= compChoice==="paper"?false :true;
        } else if(userChoice==="paper"){
           userWin= compChoice==="scissors"?false:true;
        }else{
            userWin= compChoice==="rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
};
const userScorePara= document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        useerScore++;
        userScorePara.innerText=useerScore;
        console.log("You Win!");
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lost!");
        msg.innerText=`You lose! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="red";
    }
}


