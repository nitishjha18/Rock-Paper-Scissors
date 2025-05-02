let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const rdmVal = Math.floor(Math.random() * 3);
    return options[rdmVal];
}

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game was draw/ Play Again";
    msg.style.backgroundColor = "#808080"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        // console.log("You Win"); 
        msg.innerText = "You Win";
        msg.style.backgroundColor = "Green"
    }else{
        compscore++;
        compscorePara.innerText = compscore;
        // console.log("You Lose");
        msg.innerText = "You loose";
        msg.style.backgroundColor = "Red"

    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // generate computer choice -> modular way of programming
    const compChoice  = genCompChoice();
    console.log("compChoice =", compChoice);

    if(userChoice === compChoice ){
        // draw game
        drawGame();
    }else{
        let userWin = true;

        if(userChoice === "rock"){
            // comp can only use paper or scissors
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // comp can only use rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }else if(userChoice === "scissors"){
            // comp can only use rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); 
        playGame(userChoice);
    });
});