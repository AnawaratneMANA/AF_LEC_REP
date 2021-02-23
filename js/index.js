//Example for Synchronize operation
function  getValue(callback) {
    let value = 0;
    //Delay the execution of the function.
    //It will delay one second or more.
    setTimeout(function(){
        value = 10
        console.log(value);
    }, 1000);
    //Some computational stuff. this can't be interrupted if started.
    return value;
}

getValue();

// What is the problem with this compared to previous?
/*

*/
