var person = {
    name: 'John',
    occupation: 'Engineer',
    getName: function () {
        return this.name;
    }
};

var john = {
    name: 'John',
    occupation: 'Engineer',
    getName: function () {
        return this.name;
    }
};

var jane = Object.create(john);

jane.name = 'Jane';
jane.occupation = "Doctor";




}