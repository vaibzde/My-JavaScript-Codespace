//building tic tac toe

//creating opject

var tictac = {
    data: [[Null, Null, Null],[Null, Null, Null],[Null, Null, Null]],
    reset: (function(){
        tictac.data =  [[Null, Null, Null],[Null, Null, Null],[Null, Null, Null]]
    })()
}

function mainPlay(autoPlay){//O is computer end if AUTOPLAY
    let player = X
    let run = true;
    while(run!==false){
        if(player==O){
            if(autoPlay==true){
             run = autoPlay(O)
             player = X;
            }
            else{
                let takeInput = userInput(O);
                run = main(takeInput, O);
                player = X;
             }
        }
        else{
            let takeInput = userInput(X);
            run = main(takeInput, X);
            player = O;
        }
    }
}

function main(input, player){
    let ans = play(tictac.data, input, player)
    if(ans == false){
        tictac.reset;
        console.log("gameend")
        return false;
    }
    else{
        return true
    }
}

function autoPlay(player){
    let stat = false;
    while(stat!==true){
        let x = Math.floor(Math.random() * 3);
        let y = Math.floor(Math.random() * 3);
        if(tictac.data[x][y] == null){
            stat = true;
           let varib =  main([x,y],player)
           return varib
        }
    }
}

function play(database, input, player){//input is array codinates in array form [x,y]
    let x = input[0];
    let y = input[1];
    database[x][y] = player
    if(check(database, player) == true){
        console.log(`${player} won the match  `, database)
        return false;
    }
    else{
        console.log(database)
        return true;
    }
}

function check(data,type){
    let conditionrow = false
    let conditioncol = false
    let conditiondiagonal = false;

    if((data[0][0]!==Null)&&(data[1][1]!==Null)&&(data[2][2]!==Null)){
        if((data[0][0])==(data[1][1])==(data[2][2])==type){
            conditiondiagonal = true;
        }}

        if((data[0][2]!==Null)&&(data[1][1]!==Null)&&(data[2][0]!==Null)){
            if((data[0][2])==(data[1][1])==(data[2][0])==type){
                conditiondiagonal = true;
            }}
    for(let i=0; i<3; i++){
        if((data[i][0]!==Null)&&(data[i][1]!==Null)&&(data[i][2]!==Null)){
            if((data[i][0])==(data[i][1])==(data[i][2])==type){
                conditionrow = true;
            }
        }
        if((data[0][i]!==Null)&&(data[1][i]!==Null)&&(data[2][i]!==Null)){
            if((data[0][i])==(data[0][i])==(data[0][i])==type){
                conditioncol = true;
            }
        }
    }
    if(conditioncol==true){
        return true;
    }
    else if(conditionrow==true){
        return true;
    }
    else if(conditiondiagonal==true){
        return true;
    }
    else{
        return false;
    }
}

function userInput(player){
    let input = window.prompt(`Hey, ${player}, Give the input in form of array like [x,y]`)
    return input;
}

mainPlay(true)