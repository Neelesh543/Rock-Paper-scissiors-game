let userscore = 0;
let compscore = 0;

const Score = document.querySelector("#user ,#computer")

const Score1 = document.querySelector("#computer")

const choices = document.querySelectorAll(".choice");
const Msg = document.querySelector("#move");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        Game(userchoice)

    })
})

const gencomchoice = () => {
    const options = ["rock", "paper", "scissors"];

    const random = Math.floor(Math.random() * 3);
    return options[random];

};



const Game = (userchoice) => {
    console.log("You select = ", userchoice);
    const compchoice = gencomchoice();
    console.log("computer select=", compchoice);

    if (userchoice === compchoice) {
        draw();
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            // computer choices may be paper or scissors
            userWin = compchoice === "paper" ? false : true;
           
        }
        else if (userchoice === "paper") {
            //computer choices may be rock or scissors
            userWin = compchoice === "scissors" ? false : true;
        }
        else {
            //computer choices may be rock or paper
            userWin = compchoice === "rock" ? false : true;
        }
        showwinner(userWin , userchoice, compchoice);
    }
};

const draw = () => {
    console.log("Match was draw");
    Msg.innerText = "Match was draw. Play again!"
    Msg.style.backgroundColor = "red"
}

const showwinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userscore++;
        Score.innerText = userscore;
        Msg.style.backgroundColor = "Yellow"
       Msg.innerText = `You win. ${userchoice} beats ${compchoice}` 
         
    }
    else {
        compscore++;
        Score1.innerText = compscore;       
        Msg.innerText = `You loss. ${userchoice} beats ${compchoice}` 
        Msg.style.backgroundColor = "Orange"
    }
}





