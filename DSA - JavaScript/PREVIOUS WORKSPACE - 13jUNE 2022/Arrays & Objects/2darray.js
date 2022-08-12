debugger
let arr1 = [[`Hola`, 22, `italy`],[`Senorita`, 24, `Spain`],[`Jazzy`, 30, `USA`]]
function wavyOpt(arr){
console.log(arr)
let colomn = arr[0].length
//console.log(colomn)
for(i=0; i<colomn; i++){
    for(j = 0; j<arr.length; j++){
        let k
        if((i%2)!==0){
           k = arr.length - j - 1
        }
        else{
            k = j
        }
        console.log(arr[k][i])
    }
}}

wavyOpt(arr1)