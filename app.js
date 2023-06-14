// // Use array inside an object
// const adventurer = {
//     name: "EJ",
//     hitPoints: 10,
//     belongings: ["sword", "shield", "helmet", "keys"],
//     companion: {
//         name: "Strawberry",
//         type: "human",
//         belongings: ["minimouse", "carrier", "lightsaber"]
//     }
// }

// // access the values in the array
// console.log(adventurer.belongings);

// // access the first belonging
// console.log(`First belonging: ${adventurer.belongings[0]}`); // blaket notation

// // Iterate over an array that is within an object
// for (let i=0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }

// //  #1 Obj within Obj
// console.log(`My companion's name is ${adventurer.companion.name}`); // dot notation
// console.log(`One of my companions belongings is ${adventurer.companion.belongings[2]}`);



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
for (let i=0; i<movies.length; i++) {
    console.log(movies[i].title);
}