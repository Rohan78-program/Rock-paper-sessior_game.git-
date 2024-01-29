let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreMsg=document.querySelector("#user-score");
const compScoreMsg=document.querySelector("#computer-score");

const genComChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    //console.log("Game Draw");
    msg.innerText="Game DRAW ! Play Again!!!";
    msg.style.backgroundColor="#081b31";
};

let showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userScore++;
        //console.log("You Win");
        msg.innerText=`You Win || your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor="green";
        userScoreMsg.innerText=userScore;
    }else{
        computerScore++;
        //console.log("You lose");
        msg.innerText=`You lose || ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScoreMsg.innerText=computerScore;
    }
};

const playGame=(userChoice)=>{
    //console.log("UserChoice ::",userChoice);
    //generate computer choice
    const comChoice=genComChoice();
    //console.log("ComputerChoice ::",comChoice);
    if (userChoice===comChoice) {
        drawGame();
    } else {
        let userWin=true;
        if(userChoice==="rock"){
            //paper,scissor
            userWin=comChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=comChoice==="scissor"?false:true;
        }else{
            //rock,paper
            userWin=comChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        //console.log(userChoice);
        playGame(userChoice)
    });
});