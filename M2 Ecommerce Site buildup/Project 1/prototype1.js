let temp = {
    name : `Vaibhev`,
    age : 23,
    gender : `male`
  }
  
  //let see the object prototype og temp
  console.log(temp.__proto__)//here the o/p is Object.prototype
  //now let create the object with temp
  console.log(`temp1 here`)
  const temp1 = Object.create(temp)
  
  console.log(temp1)//here the o/p is empty
  console.log(temp1.__proto__)//here the o/p is temp object
  
  console.log(temp1.__proto__.__proto__)//here the o/p is Object.prototype
  
  console.log(`temp2 here`)
  
  const temp2 = new Object(temp1)
  console.log(temp2)
  console.log(temp2.__proto__)
  //with new keyword you create a new object same as mentioned
  
  console.log(`temp3 here`)
  
  const temp3 = Object.create(temp1)
  console.log(temp3)
  console.log(temp3.__proto__)
  console.log(temp3.__proto__.__proto__)
  //while with the create keyword, you create a new object and inherit the mentioned object as prototype 
  
  console.log(`see, how one can access the temp directly with temp3`)
  
  console.log(temp3.gender)//you can access the any value of the p
  
  