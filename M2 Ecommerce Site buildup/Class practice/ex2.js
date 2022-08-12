debugger;
function mergeAlternately(word1, word2){
    //write your logic here, return the merged string
    let res = ``;
    let l1 = word1.length;
    let l2 = word2.length;
    let combRunLen = Math.min(l1,l2);
    let crn = 2*combRunLen;
    for(let i=1; i<=crn; i++){
        if((i%2)==0){
            res+= word2(i-1);
        }
        else{
            res+= word1(i-1)
        }
    }
    if(l1>combRunLen){
        for(let j=combRunLen; j<= l1; j++){
            res+= word1(j-1)
        }
    }
    if(l2>combRunLen){
        for(let j=combRunLen; j<= l2; j++){
            res+= word2(j-1)
        }
    }

    return res;
};
console.log(mergeAlternately(`hello`, `baby`));
