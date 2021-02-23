function Person(name) {
    this.name;
    this.getName = function () {
        return this.name;
    }
}

Person.prototype.getName = function () {
    return this.name;
}

function Employee(name, occupation) {
    Person.call(this, name); //?
    this.occupation = occupation
}

Employee.prototype.getOccupation = function () {
    return this.occupation;
}

//Create a copy of the person prototype and pointing to that as the employee prototype.
Employee.prototype = Object.create(Person.prototype);
//Previously entire structure has changed but we have to fix the constructor again. back to Employee.
Employee.prototype.constructor = Employee; //?

//Person Objects
var john = new Person("John");
var jahn = new Person("John");

//Employee Objects
var john = new Employee("John", "Engineer");
var jahn = new Employee("Jahn", "Doctor");

console.log(john.getName())
console.log(john)


console.log(Person.prototype === john.__proto__);

console.log(jahn.__proto__ === john.__proto__); //true (same prototype object.)
console.log(jahn.getName() === john.getName()); //false (two separate object.)
console.log(Person.prototype === Employee.prototype);