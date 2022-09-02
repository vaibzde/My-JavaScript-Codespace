class Animal{
    constructor(type,color){//special methods for creating a object..
        this.type = type
        this.color = color;
    }
   
   walk(){
        console.log(`can walk`)
    }

    eat(){
        console.log(`I can eat`, this.type, this.color)
    }
}

let an1 = new Animal(`Tiger`, `Orange`)

console.log(`an1`, an1, Animal)
console.log(an1.eat())
function Laptop(name, processor, ram){
    this.Name = name;
    this.Processor = processor;
    this.RAM = ram;
}

let macBook = new Laptop("macBookM2",`M2 Processor`, `16 GB`)

console.log(macBook)


//Watching this method

let temp = {
    name :  `Ram`,
    age: 22,
    intro : function(){
        
        return `Hello I am ${this.name} and my age is ${this.age}`
    }
}

console.log(temp.intro())

//this always execute current execution

//to acess the static variable, we can directly access through class name
