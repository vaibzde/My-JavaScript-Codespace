let arr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
function sumColomn([a]){    
    let result = new Array((a[0].length-1))
    for(i=0;i<a[0].length;i++){  
        let sum = 0    
        for(j=0; j<a.length; j++){
            sum += a[j][i]
        }
        result[i] = sum
    }
    return result;
}

console.log(sumColomn([arr]))