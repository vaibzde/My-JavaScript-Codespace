//sorting it using insertion sort, and find the 2nd highest salary employ name
let arr = [
    {'name':'Ram','sal':91400},
    {'name':'Sam','sal':18200},
    {'name':'mam','sal':12300},
    {'name':'pam','sal':11200},
    {'name':'jam','sal':12300},
    {'name':'aam','sal':12050}
]
debugger
for(i=1;i<arr.length;i++){
let ind = i
    for(j=i-1;j>=0;j--){
    if(arr[ind].sal < arr[j].sal){
        [arr[ind],arr[j]]=[arr[j],arr[ind]];
        ind--
    }
    else{
        break;
    }
}
}
console.log(arr[arr.length - 2].name)