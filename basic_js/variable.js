const accountId= 12344
let accountEmail="sneha@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"


// accountId=2  becuade once declared const it will never change

console.log(accountId)

accountEmail="233@gmail.com"
accountPassword="2123"
accountCity="Meerut"

console.log(accountEmail)

console.table([accountId,accountEmail,accountPassword,accountCity])

/*

prefer not to use var becuase of issue in block scope and functional scope
var ko  use karnse  se scope ka issue aata tha matlab agar ek variable mai kuch change kiya toh woh jaha 
jaha bhi code mai tha har jagah uski value change ho jati thi

so always use const for constant and let for variable

also withount using anyting javascript can make varaible like accountCity but is it not a 
good practise
*/

let accountState
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// here we just declared variable accountState without intialisng 
// value so when we print it it wil guve undefined value means its value is not defined