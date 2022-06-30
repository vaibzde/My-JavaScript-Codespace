//count of parenthesis given and print all possible variations
//() (())
//intermediate level
//if we need to print all possible valid parenthesis
//n = 2 => (()), ()()
//1.no of opening pracket will be always equal to closing bracket
//2. closing bracket never comes before opening one
//2. total no of opening bracket can't be more than n

function printParenthesis(result,open,close,n){
    if(result.length == 2*n){//base case
        console.log(result.join(``));//result.join(``) will join the array into string with inbetween `(empty)'
        return;
    }
    //recursive calling based on 2 diffrent conditions
    //based on situation, either one or both the condition will be applied
    if(open<n){
        result.push("(")//selfwork
        printParenthesis(result, open+1, close, n)
        result.pop()//popping up so that result can stay updated while backtracking
    }
     if(close<open){
        result.push(")")//selfwork
        printParenthesis(result, open, close+1, n)
        result.pop()//popping up so that result can stay updated while backtracking
     }
}
printParenthesis([],0,0,3)