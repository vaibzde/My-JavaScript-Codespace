var n = 7
var curr=1
var temp
var nthFib = 0
var prev = 0
var output =''
if(n==0){
    nthFib= 0
}
    else if(n==1){
        nthFib = 1
    }
    else{
        for(i=2;i<=n;i++){
            temp = prev
            perv = curr
            curr = temp + prev
            output = output + " " + curr

        }
    
    }
     console.log(output)