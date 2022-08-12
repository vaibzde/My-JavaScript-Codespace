class Person{
//Parent class
    constructor(name){
        console.log(`Parent Const.`)
        this.name = name;
    }
    //method to return the string
    toString(){
        return (`Name of the person: ${this.name}`);
    }

}

// p1 is Person { name: 'Mukul', //tostring : Function() }
let p1 = new Person(`Mukul`)
console.log(p1)


class Student extends Person{//here extends means prototyping with person
//we want to extend, necause we want to aceess some property fromn Person
    constructor(name,age){
        console.log(`Child Cpnst.`)
        super(name)// super to make use of parent constructor for this
        this.age = age;
    }

    toString(){
        return (`${super.toString()}, and the age is ${this.age}`)//super is also used to inherit method from parent class
    }
}


let p2 = new Student(`Arpit`, 23)
console.log(p2, p2.toString())

