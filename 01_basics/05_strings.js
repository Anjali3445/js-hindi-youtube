const name = "anjali"
const repoCount = 50

//console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name}and my repo count is $ {repoCount}`);

const gameName = new String('hitesh-hc')

// console.log(gameName[0]);
// console.log(gameName._proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);

const newStringOne = "   hitesh  "
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

url.includes(url.includes('sundar'))


console.log(gameName.split('-'));