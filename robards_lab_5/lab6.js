const myObjects = {
    name: '',
    age: 0,
    major: "",

    greeting: function () {
        alert(`Hello! My name is ${this.name}. I am ${this.age} years old, and my major is ${this.major}.`);
    },

    displayObjects: function () {
        document.write(`Name: ${this.name} <br>`);
        document.write(`Age: ${this.age} <br>`);
        document.write(`Major: ${this.major} <br>`);
    }
};

function runObjectDemo() {
    myObjects.name = prompt("Enter your name");
    myObjects.age = prompt("Enter your age");
    myObjects.major = prompt("Enter your major");

    myObjects.displayObjects();
    myObjects.greeting();
}