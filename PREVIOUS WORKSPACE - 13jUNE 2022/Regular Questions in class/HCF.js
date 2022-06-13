   /* fnum=12
    snum=16
    result=0;
    ​
      for(let i=1; i<=fnum && i<=snum ;i++){
        if(fnum % i == 0 && snum % i == 0){
          result=i;
          break;
        }
      }
    ​
    console.log(`The LCM of ${fnum} and ${snum} is ${result}`)*/

    var given1 = 24;
    var given2 = 16;
    
    function hcf(num1, num2){
    let rem;
    let divid = Math.max(num1,num2)
    let divis = Math.min(num1, num2)
    for(let i = 0; rem>=0; i++){
      rem = (divid % divis) 
       if(rem==0){
         return divid
         break;
       }
       divid = divis;
       divis = rem;
  }}

  let gcf = hcf(given1, given2)
  console.log(`The HCF of ${given1} and ${given2} is ${gcf}`)
  