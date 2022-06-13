
//debugger
function printPattern1(num1){
   //var n = 5
let pattern = ''
    for(let row=1;row<=num1;row++){
        if(row<parseInt((num1/2)+1)){
        for(let colm = 1; colm<=row; colm++){
            pattern = pattern + '*'
        }
        pattern = pattern + '\n'}
        else{
            for(let colm = 1; colm<=(num1-row); colm--){
                pattern = pattern + '*'
            }
            pattern = pattern + '\n'
        }     
    }
    console.log(pattern)
}
printPattern1(6)


/*var n = 4;
var pattern = "";

for(row=1;row<=n;row++){
  for(star=1;star<=row;star++){
    pattern = pattern +"* ";
  }
  pattern = pattern + "\n"
}
  for(row=n-1;row>0;row--){
    for(star = 1;star<=row;star++){
        pattern = pattern +"* "
  }
      pattern = pattern + "\n"
	}

console.log(pattern);
*/