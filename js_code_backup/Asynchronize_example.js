//Example for Synchronize operation
function  getValue() {
    let value = 0;
    //Delay the execution of the function.
    //It will delay one second or more.
    setTimeout(function(){
        value = 10

    }, 1000);
    //Some computational stuff. this can't be interrupted if started.
    return value;
}
console.log(getValue())

//How to get this 10 printed on the screen?
