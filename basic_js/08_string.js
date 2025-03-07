const name="Sneha"
const repoCount=50
console.log(name+repoCount+"Values")
//above is the old way 

console.log(`hello my name is ${name} and my repo count is ${repoCount} values `)
//above method is called string interpolation

const nameme=new String('sneha')
//another method to declare string 

console.log(nameme[0])
console.log(nameme[2])
console.log(nameme[4])
// here string 0,1,2 qare not index but its key to access the value
console.log(nameme.__proto__)

//inside prototype different fuctions and methods are defined for
//string like touppercase, tolowercase ectc

console.log(nameme.length)
console.log(nameme.toUpperCase())
console.log(nameme.charAt(3))//it tells the which character is present at that position

console.log(nameme.indexOf('e'))//it tells the index of the specificc charace=ter
const newString=nameme.substring(1,2)// start index and end index it will slice from start till end-1
console.log(newString)

const newname=nameme.slice(1,2)
console.log(newname)
const a=nameme.slice(-3,-1)
console.log(a)

//slice ans substring work as same but slice also supports negatibe index


const b="  sneha  "
console.log(b)
console.log(b.trim())//it removes the white space and new line from the string

const url="https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))// first value contain value to be search and second value contains the value which will take plave
console.log(url)

console.log(url.includes('vasishth'))//searches for the specific string inside the variable

const c="apple,banana,mango,peach,orange"
console.log(c.split(','))// splits string at place of comma is found
console.log(c.split(''))//splits each character is found
console.log(c.split(',',4))//splits string 4 times whenever comma is found

//split does not changes orifinal string,all the method of string does not modify original string

console.log(nameme)