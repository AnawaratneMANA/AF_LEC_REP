var person = {
    name: 'John',
    occupation: 'Engineer',
    getName: function () {
        return this.name;
    }
};
//Class blue print.
var john = {
    name: 'John',
    occupation: 'Engineer',
    getName: function () {
        return this.name;
    }
};

//Create new object from the Blue print.
var jane = Object.create(john);

jane.name = 'Jane';
jane.occupation = "Doctor";
console.log(john);
console.log(jane);
console.log(john.getName() === jane.getName());