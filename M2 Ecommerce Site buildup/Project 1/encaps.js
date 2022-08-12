class Person{

    //Basically in class, 2 types of variable can be declared
    //1. Normal Variable - with let const, var keyword, which will be like inherited to the object instance of class
    //2. Private Variable  which can be declared and can be used with #variable_Name
    //which can be inherited into object instance, but can not be directly seen in object, when you print
    //so Private Variable can be accessed with getter and setter..
    //3. Static Variable, which is only limited to class. not inherited to the object instance o the class
    // so can be only access with the class
    
    #age
    //private variable above

    static address = "Kanpur"

    constructor(name){
        this.name = name
    }

    printIntro(){//it is like a get function in a way
        return `My name is ${this.name} and age is ${this.#age}`
    }

    set setAge(age){//it is like set function
        this.#age = age
    }

    get getAge(){
        return this.#age
    }
}

console.log(Person.address) //static variable can be access directly from the class

let p1 = new Person(`Rohan`)//Here we have created the object instance with the class

p1.setAge = 22 //not p1.setAge(22), as it is for set and get
console.log(p1.printIntro())
console.log(p1)

console.log(p1.address)//static object is not get accessed by the object instance of the class
