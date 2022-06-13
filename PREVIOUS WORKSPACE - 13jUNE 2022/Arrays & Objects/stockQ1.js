//buy at low, sell at max.. find the max profit
//any no of transactions possible.. 1 transaction at a time
let arr = [100,20,120, 10, 60, 50,150]
function maxProfit([ar]){
    let curr
    let prev
    let sum = 0 //so that value will be something, otherwise undefined will be output
    //as ant transaction has buying point and selling point.. so initializing curr with index 1.. so that prev can be at index 0
    for(i=1;i<ar.length;i++){//iterating all along array
        curr = ar[i]
        prev = ar[i-1]
        if(curr>prev){//checking if profit then adding to sum
            sum += curr - prev
        }
      
    }
    return sum
}

console.log(maxProfit([arr]))