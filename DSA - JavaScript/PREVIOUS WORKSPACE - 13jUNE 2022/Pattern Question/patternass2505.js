//numberWrite a javascript program to print below pattern having numbers in pyramid form along with its mirror image

function pattern(num){
   let opt =``
    for(i=1;i<2*num; i++){
        if(i<=num){
            for(j=1;j<=(num);j++){
                if(j<i){
                opt += ` `
                }
                else{
                    opt += `${j} `
                }
            }
        }
        else{
            let m = i - (num - 1)
            for(k=1;k<=(num);k++){
                if(k>(num-m)){
                opt += `${k} ` 
                }
                else{
                    opt += ` `
                }
            }
        }
        opt += `\n`
    }

return opt;
}

console.log(pattern(13))