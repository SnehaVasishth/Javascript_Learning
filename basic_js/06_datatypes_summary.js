/*
in js datatypes classified as

primitive
non-primitive

this classification is based on how data is stored in memory and 
how it is accessed from memory

primitive - 7types
1. Number, String,Boolean, null, undefined,Bigint,Symbol

primitive datatypes are used as call by value means any changes made will
be done in the copy not in actual memory

NonPrimitive- 3tyoes
Array, Objets, Functions
Nonprimitve are cll by referenve



Javacsript is dynamicly typed language



*/

const score=100//number
const scoreval=100.3//number
const isLoggedIn=false//boolean
const outsideTemp=null//null
let userEmail;//undefined

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)//false
console.log(id==anotherId)//false


/*
even though value of id and anttherid s same still 
symbol makes them differnet

*/

const bigNum= 12345643213453244837829n  //wriitng n after number mkes it store as bigint
console.log(typeof(bigNum))//bingint

const heros=["shaktiman",'batman','Spiderman']

let myobj={
    name:"sneha",
    age:22,
}

const myfun=function(){
    console.log("mera pehla function")
}

console.log(typeof(myfun))//function
console.log(typeof(heros))//object

//js can store function as varible.