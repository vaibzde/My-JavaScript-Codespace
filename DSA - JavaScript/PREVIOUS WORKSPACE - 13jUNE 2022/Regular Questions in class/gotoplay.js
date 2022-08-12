var temp = 20;
var raining = false;
if((temp >= 20 && temp <= 25)&& !raining){
  console.log("go out in park");
}
else if ((temp >=18 && temp <=20)&& raining){
  console.log("be in play school");
}
else{
  console.log("go home");
}