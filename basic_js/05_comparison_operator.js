console.log(2>1)//true
console.log(2>=1)//true
console.log(2==1)//false
console.log(2<1)//false
console.log(2<=1)//false


console.log("2">1)//true
console.log("2">=1)//true
console.log("2"<=1)//false
console.log("2">"4")//false


/*
comparing string and number it first
convert string to number

"2"=>2 and then compares 
*/

console.log(null>0)//false
console.log(null==0)//false
console.log(null>=0)//true

/*
in js <,>  and == work differently


in case of null ==0 it is not converting null to 0
while in case of null>0 ad null>=0 it is converting null to 0

*/

console.log("2"==2)//true

/*
in case of string under comparisom operation
they will always first converted into number first
*/

console.log(undefined>0)//false
console.log(undefined==0)//false
console.log(undefined<=0)//false

/*
undefined when converted into Nan

in js double equal and truple equal and comparison operatorl like
> < >= <= they wrk differenrtly
*/

console.log("2"==2)//true
console.log("2"===2)//false

/*
in ==== it not only compare value but alos data type
*/

console.log(null===0)//false