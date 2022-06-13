function printPattern(num){
    opt = ``;
    for(i=1; i<=num; i++){
      if(i<parseInt(i/2 +1))
        for(j=1; j<=(i/2); j++){
        opt+= `*`
      }
      else{
          for(k=1; k<(num-parseInt(i/2)); k++){
            opt+= `*`
          }
      }
        opt+= `\n`
    }
    console.log(opt)
  }
  
  printPattern(6)