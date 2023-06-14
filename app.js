// Use array inside an object
const adventurer = {
    name: "EJ",
    hitPoints: 10,
    belongings: ["sword", "shield", "helmet", "keys"],
    companion: {
        name: "Strawberry",
        type: "human",
        belongings: ["minimouse", "carrier", "lightsaber"]
    }
}

// access the values in the array
console.log(adventurer.belongings);

// access the first belonging
console.log(`First belonging: ${adventurer.belongings[0]}`); // blaket notation

// Iterate over an array that is within an object
for (let i = 0; i < adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i]);
}

//  #1 Obj within Obj
console.log(`My companion's name is ${adventurer.companion.name}`); // dot notation
console.log(`One of my companions belongings is ${adventurer.companion.belongings[2]}`);



// #2 Use an array of objects : e.g. JSON
const movies = [
    {
        title: "Tokyo Story"
    },
    {
        title: "Paul Blart: Mall Cop"
    },
    {
        title: "L'Avventura"
    }
];

// console.log(movies[0].title); // object

// looping over array of obj
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
}


// Combine objects, arrays, and functions

const foo = {
    arr: [1, 2, 3],
    obj: {
        prop: 'object property'
    },
    doSomething: () => { //  arrow function - ES6
        console.log('hello')
    },
    doSomething2: function () { // ?? function
        console.log('hi')
    }
};
console.log(foo.arr[0]);
console.log(foo.obj.prop);
foo.doSomething();
foo.doSomething2();

// an array of arrays

const foo2 = [
    [1, 2, 3],
    ["4", "5", "6"],
    [7, 8, 9],
    () => {
        console.log("I'm a function inside an array")
    }
];

console.log(foo2[0][2]) // nested array
foo2[3](); // call a function inside of array ******* 



// CLASS

// creating a class

class Character {
    constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || true; // not working when pass false as argument
    }

    // this is better way than // jay.eyes = "green"; //
    setHairColor (hairColor) {
        this.hair = hairColor;
    }
    // method 1
    greet(otherchracter) {
        console.log(`Hello ${otherchracter}!`)
    }

    // method 2
    smite() {
        console.log('I smite thee you vile person');
    }

    // static method
    static greet2() {
        console.log("Hello!")
    }
}

// const me = new Character();
// const you = new Character();

// console.log(typeof me);

// me.greet();
// you.greet();

// Character.greet2(); //  call a static method

// me.greet("Jay");
// you.smite();

const jay = new Character("Jay", "22", "brown", "brown", false, true);
jay.eyes = "green"; // update a class peoperty of the obj
jay.setHairColor('red'); // built-in method: this is better than above way

console.log(jay);




// Make a class inherit attributes from a "parent class"

class Hobbit extends Character {
    constructor(name, age, eyes, hair) {
        super(name, age, eyes, hair); // super : parent class, can use both method & property
        this.skills = ["thievery", "speed", "willpower"];
    }

    steal () {
        console.log("Let's get away!")
    }

    greet (otherCharacter) {
        console.log('Greetings ' + otherCharacter.name);
    }

    smite() {
        super.smite();
        this.steal();
    }
}

const frodo = new Hobbit('Frodo', 80, 'brown', 'black');
console.log(frodo);
frodo.smite();
frodo.steal();
const ej = new Character('EJ', 20, 'brown', 'black');
frodo.greet(ej);