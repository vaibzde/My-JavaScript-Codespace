let a = [[1,0,1],[0,1,0],[0,0,1]];
function matCheck(arr)
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(i!==j){
            if(arr[i][j]!==0){
                return false;
                
            }
        }
       
    }
    return true;
}
console.log(matCheck([a]))