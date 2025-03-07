/*
there are two type of datatypes primitve and non-primitive

Primitive gets memory in stack and non-primitive gets memory in heap

primitives datatype, ist value directly store in stack. 


then b is gets the copy of value of a. Now any changes in b will not take place in a




*/

let a=10
let b=a
console.log(a,b) //10 10
b=20
console.log(a,b) //10 20
// b is gets the copy of value of a. Now any changes in b will not take place in a


let obj1={
    name:"sneha"
}
let obj2=obj1

console.log(obj1)
console.log(obj2)
obj2.name="Aashi"
console.log(obj1,obj2)

/*
in nonprimituve type, variables stores the refernces in stack and those referebces are actually the
memory address inside heap where the actual value is stored.
so when we do
obj2=obj1 then referenc address stored in obj1 is copied to obj2 and both of them pointing to same memory
any modification to data inside heap will makes the changes for both obj1 and obj2 



*/

obj2={
    name:"Khushi"
}
console.log(obj1,obj2)

/*

here above the non primitive variables if reassigned with new value then it get new refernce for
the new data stored in differnt address location inside heap. Thus obj1 and obj2 now points to different
memory address.

*/
/*

1️⃣ Primitive Data Types (Stored in Stack Memory)
🔹 Examples: Number, String, Boolean, Null, Undefined, Symbol, BigInt
🔹 Memory Location: Stack Memory (Stores actual values)
🔹 Behavior: Each variable gets its own separate memory space

Example 1: Primitive Types
javascript
Copy
Edit
let a = 10;
let b = a;  // Copy the value of 'a' into 'b'

b = 20;  // Changing 'b' does NOT affect 'a'

console.log(a); // Output: 10
console.log(b); // Output: 20
✅ Explanation:

a = 10 → 10 is stored directly in the stack.
b = a → A copy of 10 is created for b.
Changing b does not affect a because each has its own separate copy.
📌 Conclusion: Primitives are stored separately in the stack. Copying a primitive value creates a new, independent copy.

2️⃣ Non-Primitive (Reference) Types (Stored in Heap Memory)
🔹 Examples: Object, Array, Function
🔹 Memory Location: Heap Memory (Stores the actual object)
🔹 Behavior: Variables store references (addresses), not actual values

Example 2: Non-Primitive Types (Objects)
javascript
Copy
Edit
let obj1 = { name: "Sneha" };
let obj2 = obj1;  // Copying the reference, not the actual object

obj2.name = "Vasishth";  // Changing obj2 also changes obj1

console.log(obj1.name); // Output: "Vasishth"
console.log(obj2.name); // Output: "Vasishth"
✅ Explanation:

{ name: "Sneha" } is created in heap memory.
obj1 stores a reference (memory address) of that object.
obj2 = obj1 → Copies the reference, NOT the object itself.
Changing obj2.name also changes obj1.name because both obj1 and obj2 point to the same object in heap.
📌 Conclusion: Non-primitives store references in the stack, but the actual object lives in the heap. Copying a non-primitive variable copies the reference, not the actual value.

3️⃣ What Happens When We Reassign a Non-Primitive?
javascript
Copy
Edit
let obj1 = { name: "Sneha" };
let obj2 = obj1;  // Both obj1 and obj2 point to the same object

obj2 = { name: "Vasishth" };  // Now obj2 points to a NEW object in heap

console.log(obj1.name); // Output: "Sneha"
console.log(obj2.name); // Output: "Vasishth"
✅ Explanation:

obj1 and obj2 originally point to the same object.
obj2 = { name: "Vasishth" } creates a new object in the heap.
obj2 now points to this new object, but obj1 still points to the old one.
📌 Conclusion: Reassigning a non-primitive creates a new object in heap and breaks the reference to the original object.

4️⃣ Arrays in Memory (Also Stored in Heap)
Arrays in JavaScript are non-primitive and follow the same heap storage rule.

javascript
Copy
Edit
let arr1 = [1, 2, 3];
let arr2 = arr1;  // arr2 gets the reference of arr1

arr2.push(4);  // Modifying arr2 also affects arr1

console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]
✅ Explanation:

The array [1, 2, 3] is stored in heap memory.
arr1 holds a reference to it.
arr2 = arr1 copies the reference, so both variables point to the same array.
arr2.push(4) modifies the original array in heap, so arr1 also sees the change.
📌 Conclusion: Arrays behave like objects, meaning they are reference types stored in heap.



*/
