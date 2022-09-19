/*You are given a sorted sequence of n integers S = s1, s2, ..., sn and a sorted sequence of m integers Q = q1, q2, ..., qm. Please, print in the ascending order all such si that does not belong to Q.*/
//include is S with s1,s2,s3....
//exclude is Q with q1, q2, q3...
function incExcludeArray(include,exclude){
    let inLength = include.length
    let exlength = exclude.length

    let res = []
    
    let i1 = 0; //index for include
    let i2 = 0; //index for exclude

    while(i1<inLength){

        if((include[i1]<exclude[i2]) || (i2==exlength)){
            res.push(include[i1]);
            i1++
        }
        else if(include[i1]==exclude[i2]){
            i1++ //skip i1 will not include
        }
        else{//for case (include[i1]>exclude[i2])
            i2++
        }

    }

    return res;

}

console.log(incExcludeArray([1,2,3,4,5,6,7,8,9,10],[2,5,7]))

//complexity in O(n)