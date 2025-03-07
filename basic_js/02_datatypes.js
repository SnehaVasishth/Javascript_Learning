"use strict";
//js written in old books are older version which has different syntax
// to make compiler know that we are usinf newwer version of js we write use strict to tell that
// we are using newer version of js
// mjaroity compiler har become smart enough after looking upon stytax it automatically
// comile and verify by comparing with newer version of js but to enhace readia=bilyt we write use strict

// alert(3+3)  alert will not print 6 becuase we are using node and if we use js engine of browser in inspect console it will give as 6 as alert msg in browser

// console.log(3+3) console.log("sneha") writing both console in one line gives eroor but if end one console with semicolon the error removes
//wriiting instructions in one line also effects readibilty thus one instruction over wrte another in seperate line

console.log(3+2)
console.log("sneha")

let name="sneha"
let age=20
let isLoggedIn=false

//datatypes
/*
number =  2 to power 53
bigint
string => can encolse within single or double quotes
boolean=> true/false
null=> standalone value 
undefined=> varlue of variable is not initialised
null is used to depict that the variable is empty 

supose from server it is not able to send the current temperature.
we can not set it as 0 as 0 also signify temperature. In such xase we define Null 
to suggest that it is empty. when we want to set the variable as intentionally empty we use null

symbol=> it is used to identiy uniqueness

they are all primitive datatypes



object = it is not primitve datatype

*/


console.log(typeof age) //number
console.log(typeof isLoggedIn)//boolean
console.log(typeof null)  // it gives object
console.log(typeof undefined)// it gives undefined
