let arr = [[1,2,3,4],[6,8,12,16],[18,21,29,32]]

function isTargetPresent([a],target){
    let i,j;
    for(i=0; i<a.length;i++){
        if(a[i][0]<=target && target<=a[i][(a[0].lenth)-1]){
            break
        }
    }
    for(j=0; j<a[0].length; j++){
        let value = a[i][j];
        if(value==target){
            return true
        }
    }
    return false
}

console.log(isTargetPresent([arr],21))