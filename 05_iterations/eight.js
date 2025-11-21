// const  myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval } ,0 )

// console.log(myTotal);

// const myTotal = myNums.reduce((acc,curr) => acc+curr , 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course" ,
        price : 2999

    },
    {
        itemName : "Data Science Course " ,
        price : 999

    },
   {
        itemName : "py Course" ,
        price : 299

    },
    {
        itemName : "java Course",
        price : 1000

    },
    {
        itemName : "mobile dev Course",
        price : 10900

    },
]

const priceToPay = shoppingCart.reduce((item) => item.price , 0)

console.log(priceToPay);