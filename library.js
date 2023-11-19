export default function(){
    console.log("This is the default function from library.js module")
}

var message = "Hello World";

function funct(){
    console.log("This is a function statement");
}
class Fruit{
    constructor(name){
        console.log(`This is a constructor of class Fruit ${name}`);
    }
}

export { message, funct, Fruit };