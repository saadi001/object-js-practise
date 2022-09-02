// different ways to create a object 

// 1. create object using object literals(most used)
const player = {};
player.name = 'saadi';
player.speciality = 'all rounder';
player.bat = function(){
    console.log('swing your bat');
}
console.log(player);
player.bat();

// 2. object constructor
const person = new Object();
console.log(person);

// 3. object create method 
const atel = Object.create(player);
console.log(player.name );

// 4. class(used)
class people{
    name = 'abul';
    adress = 'chandpur';
    constructor(age){
        this.age = age;
    }
}
const people1 = new people(22);
console.log(people1);