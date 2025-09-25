const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassward = "12345"
accountCity = "Jaipur"

//accountId = 2 // not allowed

if(condition){

}
console.log(accountId);
/* Prefer not to use var because of issue in block scope and fundamental scope */
accountEmail = "hc@hc.com"
accountPassward = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId , accountEmail , accountPassward , accountCity])