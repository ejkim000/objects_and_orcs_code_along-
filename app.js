// Use array inside an object
const adventurer = {
    name: "EJ",
    hitPoints: 10,
    belongings: ["sword", "shield", "helmet", "keys"],
    companion: {
        name: "Strawberry",
        type: "human"
    }
}

// access the values in the array
console.log(adventurer.belongings);

// access the first belonging
console.log(`First belonging: ${adventurer.belongings[0]}`); // blaket notation

// Iterate over an array that is within an object
for (let i=0; i < adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i]);
}


//  #1 Obj within Obj
console.log(`My companion's name is ${adventurer.companion.name}`); // dot notation

