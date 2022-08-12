//learning node jsnse
//file name index.js
//every time you are creating create a file name as index.js


// write -    node    in terminal than node will be opened.. then (To exit, press Ctrl+C again or Ctrl+D or type .exit)




//now if we want to export this temp and get temp.. why we want to export, because we dont want to repeat th thing in every file..
//if we have written some thing in a file, then if that code is required in anothr file.. we dont equire to write it again their.
//we can simply export and import module..
//now what is modulee, we have to do RnD it in detail..

//basicaly
//in node js.. ebvery file in module.. module is like library
//let export the car and meth() from index.js to code.js
//module easy your work - collection of property and functionality basicaly which easify your work


//if we want to export multiple things, we export it via object
//if we want to export single thing, we can do
// module.export = car
// car.js
const car = {
    brand: 'Ford',
    model: 'Fiesta'
    }

function ola(){
    return "Car is here"
}


    module.exports = {car1 : car,
                        meth : ola}

                        
//basically 3 type of module
//1- core module - which node js automatically provide you ex- fs, stdp, path module
//2- local module -  which we create, like what we have created above to share file
//3- third party module - which other developer has developed, which WE INSTALL IN OUR SYSTEM

//every file in node js is module  - V.IMP







