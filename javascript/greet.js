let name;
let age;
function greet(name){
    console.log("hello "+name);
}
function agecheck(name,age){
    if (age>=18){
        console.log(name+" you are"+age +" so you are major")
    }
    else if (0<age<18){
        console.log(name+" you are"+age +" so you are minor")
    }
    else{
        console.log(age +" invalid age")
    }
}

greet("moksha");
agecheck("moksha",20);

