let score=33
 console.log(typeof score)//number
 console.log(typeof(score))//number

score="33"

console.log(typeof(score))//string

let valueInNumber=Number(score)
console.log(typeof(valueInNumber))//number

score="33abc"

let newVal=Number(score)
 console.log(typeof(newVal))//number
 console.log(newVal)//Nan

// /**
// so in js string like"22abc" can aslo converted into number
// which should not be converted since it hss alphabest . on printing such converted strings into number
// it will give Nan. Nan means not a number. thogh it can convert any string into number but on printing such converted number
// it will give Nan 

//  */


 let marks= null

let converted= Number(marks)
console.log(typeof(converted))//number
console.log(converted)//0


 let marks1=undefined
  let converted1=Number(marks1)
 console.log(typeof(converted1))//number
console.log(converted1)//Nan


let marks2=true
 let converted2=Number(marks2)//number
console.log(typeof(converted2))//number
console.log(converted2)//1

let marks3=false
let converted3=Number(marks3)
console.log(typeof(converted3))//number
console.log(converted3)//0

/*
"33"=> 33
"33abc"=> Nan
true=> 1
false=> 0
null=>0
undefined=>Nan

1=>true
0=>false
""=>false
"sneha"=>true


*/

let somenum=33
let converted4= String(33)
console.log(converted4)//33
console.log(typeof((converted4)))//string