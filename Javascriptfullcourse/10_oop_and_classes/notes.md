## javascript classes

## oop

## Objects

- collection of properties and methods 
- toLowerCase

## Why use oop

## parts off oop

Object literls 

- construtor function 
- Prototype 
- Classes
- Instance (new , this)

## 4 pillars

Abstraction	सारांशता	Sirf important cheezein dikhana
Encapsulation	सम्पुटन	Data ko class ke andar chhupana
Inheritance	विरासत	Ek class doosri class ke features le sakti hai
Polymorphism	बहुरूपता	Same function ka alag-alag behavior



//--------------------Abstraction--------------------------------------------

Abstraction - Definition:
Abstraction ka matlab hota hai सिर्फ जरूरी चीज़ों को दिखाना और बाकी details को छुपाना.

Example (Real Life):
Car chalate waqt aap sirf steering, gear, brake, accelerator use karte ho.
Lekin engine kaise kaam karta hai, wo chhupa hota hai. Yeh abstraction hai.


Example----->     class Car {
  startEngine() {
    console.log("Engine started");
  }

  drive() {
    console.log("Car is moving");
  }
}

const myCar = new Car();
myCar.drive(); // Abstraction: andar engine kaise chal raha hai pata nahi



/-------------------Encapsulation---------------------------------------

Encapsulation----->    Definition:
Encapsulation ka matlab hota hai data aur functions ko ek unit me band karna, aur data ko private banana.

Example (Real Life):
Mobile phone ke andar battery, processor sab kuch hota hai, par sab kuch ek box me band hota hai.
User sirf buttons use karta hai — andar ki working hidden hoti hai.

Example (Code):

javascript
Copy
Edit
class Person {
  #age = 0; // private property

  setAge(age) {
    if(age > 0) {
      this.#age = age;
    }
  }

  getAge() {
    return this.#age;
  }
}

const p = new Person();
p.setAge(25);
console.log(p.getAge()); // 25
// p.#age  // error: private property



//-------------------------inheritance------------------------------------------------
inheritance------->     Definition:
Inheritance ka matlab hota hai ek class doosri class ke properties aur methods ko use karna.

Example (Real Life):
Bachcha apne maa-baap se kuch qualities inherit karta hai.
Waise hi ek class doosri class ke features use karti hai.

Example (Code):

javascript
Copy
Edit
class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

const d = new Dog();
d.sound(); // inherited from Animal
d.bark();  // own method



//------------------------------------------------------Polymorphism--------------------------------

Polymorphism----->    Polymorphism ka matlab hota hai same function ka different behavior hona depending on object/class.

Example (Real Life):
Aap “run” word ko different sense me use karte ho:

A person runs (bhagta hai)

A machine runs

A business runs

Sab me “run” ka matlab alag.

Example (Code):

javascript
Copy
Edit
class Animal {
  speak() {
    console.log("Animal makes sound");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

const animals = [new Animal(), new Cat(), new Dog()];

animals.forEach(animal => animal.speak());

