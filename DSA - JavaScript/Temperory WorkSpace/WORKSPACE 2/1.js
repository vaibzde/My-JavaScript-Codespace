//You will be given particular int
//you have to return min steps, n to 1
//operation 1 subtract by 1
//divid by 3
//divid by 2

function nto1(n,c){
    //base case
    if(n==1){
        console.log(c)
        return
    }

    //recursive call in conditional way
    if(n%3==0){
      n = n/3//self work
        nto1(n,c+1);
    }
    else if(n%2==0){
        n = n / 2;//self work
        nto1(n,c+1);
    }
    else{
        n--
        nto1(n,c+1);
    }
}

nto1(5,0)