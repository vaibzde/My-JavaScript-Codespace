//tic tac toe game

let data = [[Null, Null, Null], [Null, Null, Null], [Null, Null, Null]]
let defaultData = [[Null, Null, Null], [Null, Null, Null], [Null, Null, Null]]
let prevGames = []
prevPlayer = Null

function reset(){
    prevGames.push(data);
    data = defaultData;
    player1.playHist = [];
    player1.noOfChances = 0;
    player2.playHist = [];
    player2.noOfChances = 0;
    prevPlayer = Null
}

let player1 = {
    symbol : `X`,
    playHist : [],
    noOfChances : 0
}

let player2 = {
    symbol : `O`,
    playHist : [],
    noOfChances : 0
}

function fullCheck(){
    for(let i = 0; i<3; i++){
        for(let j=0; j<3; j++){
            if(data[i][j]==Null){
                return false;
            }
        }
    }
    return true;
}

function checkWin(playerSymbol){
    for(let i=0; i<3; i++){
        //horizontal check
        if(data[i][0]==data[i][1]==data[i][2]==playerSymbol){
            return true
        }
        //vertical check
        if(data[0][i]==data[1][i]==data[2][i]==playerSymbol){
            return true;
        }
    }

    //diagonal check
    if(data[0][0]==data[1][1]==data[2][2]==playerSymbol){
        return true;
    }
    if(data[0][2]==data[1][1]==data[2][0]==playerSymbol){
        return true;
    }


    return false;
}

function printGame(){
    console.log(`current game is \n ${data} \n in which \n player1 [x] GameHistory is ${player1.playHist} with ${player1.noOfChances} chances & \n player2[0] GameHistory is ${player2.playHist} with ${player2.noOfChances} chances`)
}

function main(player, cordinates){
    if(prevPlayer==Null || player!=prevPlayer){
        data[cordinates[0]][cordinates[1]] = player.symbol;
        player.playHist.push(cordinates)
        player.noOfChances++
        prevPlayer = player;

        if(checkWin(player.symbol)==true){
            console.log(`${player} ${player.symbol} won the game`)
            printGame();
            reset()
        }
        else{
            if(fullCheck()==true){
                console.log(`Game Over`)
                printGame;
                reset;
            }
        }

    }
    else{
        console.log(`${player} ${player.symbol}, its not your turn`)
    }
}