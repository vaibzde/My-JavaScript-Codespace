let arr = [[1,2,3],[4,5,6],[7,8,9]]
function lowerAndUpperSum([a]){    
    let lsum = 0;
    let usum = 0;
    for(i=0;i<a.length;i++){  
         
        for(j=0; j<a.length; j++){
            if(j>=i){
                usum += a[i][j]
            }
            if(j<=i){
                lsum += a[i][j]
            }
        }
    }
    return [usum,lsum];
}

console.log(lowerAndUpperSum([arr]))