
const mergeAlternately = (str1, str2) => {
   const a = str1.split("").filter(el => !!el);
   const b = str2.split("");
   console.log(a,b)
   let mergedString = '';
   for(var i = 0; i < a.length || i < b.length; i++){
      if(i < a.length){
         mergedString += a[i];
      };
      if(i < b.length){
         mergedString += b[i];
      };
   };
   return mergedString;
};
mergeAlternately(1516,76889)