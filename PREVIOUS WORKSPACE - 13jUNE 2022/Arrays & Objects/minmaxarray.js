let a = [3,6,43,34,-67,1,4,32,567,454]
function minMax([arr]){
let temp = []
	temp.min = temp[0];
  temp.max = temp[1];
  temp.min = arr[0];
  temp.max = arr[0];
  let curr;
for(i=0; i<arr.length; i++){
    curr = arr[i]
    if(curr>temp.max){
        temp.max = curr
    }
    if(curr<temp.min){
        temp.min = curr
    }
}
  return temp;
}
console.log(minMax([a]))