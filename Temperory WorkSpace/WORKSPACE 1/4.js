//count of parenthesis given and print all possible variations
//() (())
//intermediate level
//if we need to print all possible valid parenthesis
//n = 2 => (()), ()()
//1.no of opening pracket will be always equal to closing bracket
//2. closing bracket never comes before opening one
//2. total no of opening bracket can't be more than n

function printParenthesis(result,open,close,n){
    if(result.length == 2*n){
        console.log(result)
        return 
    }

    if(open<n){
        result.push("(")
        printParenthesis(result, open+1, close, n)
        //result.pop()
    }
     if(close<open){
        result.push(")")
        printParenthesis(result, open, close+1, n)
        //result.pop()
     }
    
}

printParenthesis([],0,0,3)