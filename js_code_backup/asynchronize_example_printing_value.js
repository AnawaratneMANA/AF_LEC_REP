//Example for Synchronize operation
function  getValue(callback) {
    let value = 0;
    //Delay the execution of the function.
    //It will delay one second or more.
    setTimeout(function(){
        value = 10
        callback(value);
    }, 1000);
    //Some computational stuff. this can't be interrupted if started.
    return value;
}
getValue(function (value){
    console.log(value);
});

//How to get this 10 printed on the screen?
