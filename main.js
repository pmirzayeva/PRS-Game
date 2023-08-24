const selectors=["r","p","s"]

let player1Score=0
let player2Score=0

const winningScore=4



// console.log("youScore",playerYouScore);
// console.log("ComScore",playerCompScore);


// function isWin(isPlayerWin){
//         playerYouTitle.innerHTML=isPlayerWin ? "WIN" : "LOSE"
//         playerCompTitle.innerHTML=!isPlayerWin ? "WIN" : "LOSE"

//         playerYouTitle.classList.remove(`text-${isPlayerWin? "danger":"sucess" }`)
//         playerYouTitle.classList.add(`text-${isPlayerWin? "success":"danger" }`)
        
//         playerCompTitle.classList.add(`text-${!isPlayerWin ? "success":"danger" }`)
//         playerCompTitle.classList.remove(`text-${!isPlayerWin? "danger":"sucess" }`)
//         return
    
// }



function showSelector(p1,p2){
    playerYouScore.innerText=`Score: ${player1Score}`
    playerCompScore.innerText=`Score: ${player2Score}`
    
    playerYouSelector.src=`./assets/images/${p1}.png`
    playerCompSelector.src=`./assets/images/${p2}.png`
    }


    function resetScore(){
        player1Score=0
        player2Score=0

        playerYouScore.innerText=`Score: ${player1Score}`
        playerCompScore.innerText=`Score: ${player2Score}`
    }


    function checkWinCondition() {
        if (player1Score === winningScore) {
            updatePlayerStatus("You win!");
            resetScore();
        } else if (player2Score === winningScore) {
            updatePlayerStatus("Computer wins!");
            resetScore();
        }
    }


function startGame(e){
    const playerYouSelector=e.key.toLowerCase()
    if(!selectors.includes(playerYouSelector)){
        alert("Please press S,R,P buttons ")
        return
    }
    const playerCompSelector=randomElement(selectors)


if(playerYouSelector==="r"&&playerCompSelector==="s" ||
playerYouSelector==="s"&&playerCompSelector==="p"||
playerYouSelector==="p"&&playerCompSelector==="r")
{
    player1Score+=1
    // isWin(true)
    showSelector(playerYouSelector,playerCompSelector)


}else if(playerYouSelector==="r"&&playerCompSelector==="r"||
playerYouSelector==="s"&&playerCompSelector==="s"||
playerYouSelector==="p"&&playerCompSelector==="p")
{
    
    showSelector(playerYouSelector,playerCompSelector)


}else{

    player2Score+=1
    // isWin()
    showSelector(playerYouSelector,playerCompSelector)
}

checkWinCondition();
}


const playerStatusElement = document.getElementById("playerStatus");
function updatePlayerStatus(message) {
    playerStatusElement.textContent = message;
}


window.onkeydown=startGame;

