---
Layout:
Title: "Difference between composition and inheritance in reactjs"
Date: 2019-07-24
---

## Difference between composition and inheritance in reactjs
 
 Inheritance:
 Inheritance is when a child class obtains properties from its parent class,
 and the example is below where the car extends its properties from a class Vehicle.

class Vehicle{

    constructor(name,type){
        this.name = name;
        this.type = type;
    }

    getName (){
        return this.name;
    }

    getType (){
        return this.type;
    }
}

class Car extends Vehicle{
    constructor(name){
        super(name,"car");
    }

    getName (){
        return "The car name is": + super.getName();
    }
}

Composition:
With composition is different because instead of inheriting properties from the base class,
it give detail of a class that can reference one or more objects of another classes examples. 