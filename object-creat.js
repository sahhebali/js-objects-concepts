// 1. using object letarel
const student = { name: 'Md saheb', job: 'learn webdeveloer' };

// 2. constructor 
const person = new Object();

// 3. 
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.job);

// class 
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('manus', 12);
console.log(peop);

function manus(name) {
    this.name = name;
}

const man = new manus('kader');
// console.log(man);

