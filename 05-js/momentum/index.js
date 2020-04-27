const me = {
    name: "donghyun",
    favFood: "salmon",
    age: 27
};

function sayHello(person) {
    return "Hello " + person.name + ". You are " + person.age + " years old, alright?";
}

console.log(sayHello(me));
