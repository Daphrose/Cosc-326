const student ="daphy";
let str = ""
console.log(typeof(str));
console.log(student)

// an empty space in concatenation
let fName = "Daphy"
let lName = "obuya"
let fullName = fName + lName;
console.log( fName + " " + lName );
console.log("my names are" + " " + fullName);

// string reverse
let string = "My name is obuya Daphy"
let stringArray = ['t','y','p','e','s','c','r','i','p','t']//split
let reversedString =['t','y','p','e','s','c','r','i','p','t']//reverse
let joinedArray = "typescript"
console.log(string.replace("Daphy","Ronny"))

function reverseString(str){
    return str.split(" ").reverse().join(" ")
}
console.log(reverseString(string));


//arrays
// accessing arrays 
let pet = ["dog", "cat", "snakes"]
let arr =["dog", 23, true ]
console.log(arr.length)
console.log(arr.push())
// pop,,removes  and returns the last element,,,shift removes and returns the first element
console.log(pet)
console.log(pet.pop())

let snake = pet[2]
console.log(snake)

// spread operator ,,clone an array
let arrStr = ["A","B","C","D"];
console.log(arrStr)
console.log(...arrStr)

const items = ["books", "pencils" ,"pens", "set"]
const[x,y,z,t] = items
console.log(x)

// bracket and dot notation of accessing arrays
 let techie = {
    firstName:"Daisy",
    age:23,
    course:"CS"

 }

 console.log(techie["age"]);
 