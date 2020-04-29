// 생성자
function Person(username, age) {
    this.username = username;
    this.age = age;
    this.sayHi = function () {
        console.log(`안녕? 나는 ${this.username}야. 나이는 ${this.age}살이야.`);
    };
}

const p1 = new Person("동현이", 20);
const p2 = new Person("현동이", 21);
p1.sayHi();
p2.sayHi();
