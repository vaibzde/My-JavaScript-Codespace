//file is code.js

//here we will import the file, which we have exported in index.js

// NOW TO IMPORT

// index.js
const {car1, meth} = require('./car')
console.log(meth())
// we can import files with require('filename')
//and can import it in avariable also like
//const var = require(`./car), here var is the object
//and rather by using destructuring we have imprted above, that is also the way

