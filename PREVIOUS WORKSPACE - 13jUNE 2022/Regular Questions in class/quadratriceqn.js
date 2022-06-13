var a = -2
var b = -1
var c = 1

let d 
d = b*b - 4*a*c
 if(d>0){
     console.log("2 roots exist")
     let root1 = (-b + Math.pow(d,0.5))/2*a
     let root2 = (-b - Math.pow(d,0.5))/2*a
     console.log(root1 + " is root1 \n")
     console.log(root2 + " is root1 \n")

 }
 
 else if(d=0){
     console.log("2 roots exist \n")
     let root1 = (-b)/2*a
     console.log( root1 + " is root1 and the only 1 root")
   
 }

else{
    console.log("Real roots doesnt exist")
}
hello hwxjwhsjddhxnwiu