// start with javascript 
var a=5;
var b=6;
var ans=a+b;
console.log("This is my file ");
console.log("this is sum : ",ans);
console.log("hay ");
// basics of javascript 
let c=6
let d=7
console.log(c+d)
// const --> cant change the varaible ones define
const name="prince"
console.log(name)
console.log(typeof name )// typeof return type

// array  their are multiple methods of array like java, python
const cars=["saab","aab",67,90]
cars.push("tesla")/// push element in  array
console.log(cars)
cars.pop()// pop element
cars.reverse()// reverse array 
console.log(cars)
console.log(cars[2])
//if and for loop
// var hour=25
// if(hour <20){
//     console.log("Not allowed")
// }
// else{
//     console.log("allowed")

// }
// count=20
// for(var i=0;i<count;i++){
//     console.log(i)
// }

// object in javascript
// const person={
//     name:"prince",
//     age:30,
//     address:"lrishan puram",
//     hobbies:["hh","hfhhf"]


// }
// console.log(person.name)
// console.log(person)
// console.log(person.hobbies)

// const ages=[23,21,34,56,65];
// const result=ages.filter(check);
// function check(age){
//     if(age<34){
//      return age    
//     }
// }
// console.log(result)

// take input from user using prompt install package prompt-sync
var prompt=require('prompt-sync')();
const age=prompt("Enter your age")
if(age>=18){
    console.log("eligible")}
else{
    console.log("Not allowed")
}
