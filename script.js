const game = () => {
    let cPoints = 0;
    let pPoints = 0;

    // Start of the Game
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    
// Start of Play match
    const playMatch = () => {
        const options = document.querySelectorAll(".buttons button");
        const playerRock = document.querySelector(".player-rock");
        const computerRock = document.querySelector(".computer-rock");

        //  Computer options 
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function (){

                // Computer's choices
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                // Here is where we call compare choice
                compareChoices(this.textContent, computerChoice);


                // Updating images
                computerRock.src = `./images/${computerChoice}.png`;
                playerRock.src = `./images/${this.textContent}.png`;
            });
        }); 
    };

    // Updating points
    const updatePoints = () => {
        const playerPoints = document.querySelector(".player-points p");
        const computerPoints = document.querySelector(".computer-points p");

        playerPoints.textContent = pPoints++;
        computerPoints.textContent = cPoints++;
        
    };

    const compareChoices = (playerChoice, computerChoice) => {
        // Display "You Win! or You Loose:(" text

        // Checking if it's a tie
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winner.textContent = "It's a tie!";
            updatePoints();
            return;
        }

        // Checking if img is a rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "You win!"
                pPoints++;
                updatePoints();
                return;
            }else{
                winner.textContent = "You Loose"
                cPoints++;
                updatePoints();
                return;
            }
        };

        // Checking if img is paper
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "You Loose:("
                cPoints++;
                updatePoints();
                return;
            }else{
                winner.textContent = "You Win!"
                pPoints++
                updatePoints();
                return;
            }
        };

        // Checking if img is scissors
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "You Loose:("
                cPoints++;
                return;
            }else{
                winner.textContent = "You Win!"
                pPoints++;
                updatePoints();
                return;
            }
        }

    };

    // Calling inner function
    startGame();
    playMatch();
};

// Start of the Game function
game();