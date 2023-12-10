const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function randomChoice() {
    const choices = ["batu", "gunting", "kertas"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

console.clear();

readLine.question("Player chose : ", (result) =>{
    const playerChoice = result;
    const computerChoice = randomChoice();
    
    console.log("Computer chose : " + computerChoice)
    
    if (playerChoice == "gunting" && computerChoice == "kertas") {
        console.log("Player Win!");
    } else if (playerChoice == "batu" && computerChoice == "gunting") {
        console.log("Player Win!");
    } else if (playerChoice == "kertas" && computerChoice == "batu") {
        console.log("Player Win!");
    } else if (playerChoice == computerChoice) {
        console.log("draw");
    } else {
        console.log("Computer Win! Try again")
    }

    readLine.close()
});