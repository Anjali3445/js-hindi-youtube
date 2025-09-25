// Primitive data type

// 7 types : String , Number , Boolean , null , undefined , Symbol ,BigInt

// const score  =  100 
// const scoreValue  = 100.3
// const isLoggedIn = false 
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);
//const bigNumber = 345678927878n

// Reference(Non primitive)

// Array ,Objects, Functions
// const heros =["saktiman" + "naagraj" , "doga"]
// let myObj = {
//     name : "hitesh" ,
//     age : 22 ,
// }

// const myFunction = function() {
//     console.log("Hello world");
// }

// console.log(typeof myFunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap Memory(Non-Primitive)

let myYouTubename = "anjaliprajapatidotcom"
let anothername = myYoutubename
anothername = "Chaiaurcode"

console.log(anothername);
console.log(anothername);

let user = {
    email : "user@google.com" ,
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "anjali@google.com"

console.log(userOne.email);
console.log(userTwo.email);