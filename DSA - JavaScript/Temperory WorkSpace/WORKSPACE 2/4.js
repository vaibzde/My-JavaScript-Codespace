//find minimum no of currency note and its value
// no of notes of deiffrent denomination
//notes of rupees 1,5,10,20,50,100,200,500,2000

function notes(rupee){
    let notesType = [1,5,10,20,50,10,200,500,2000]
    let counter = new Array(9).fill(0)//new way of creating new array
    let index = notesType.length - 1
    minNotes(rupee,notesType,counter,index)
    let opt = ``
    let totalNotes = 0;
    for(let i=0;i<counter.length;i++){
        opt+= `${notesType[i]}-${counter}\n`
        totalNotes+= counter[i]
    }
    opt += `total Notes = ${totalNotes}`
    return opt;
}

function minNotes(rupeeTarget,notesType,counter,index){
    let sum = 0;
    for(let j=0;j<notesType.length;j++){
        sum+= (notesType[j]*counter[j])
    }
    let diff = rupeeTarget-sum
    if(sum==rupeeTarget){
        return;
    }

    if(notesType[index]<=diff){
        counter[index]++
        minNotes(rupeeTarget,notesType,counter,index)
    }
    else{
        minNotes(rupeeTarget,notesType,counter,index-1)
    }
}

console.log(notes(1567))