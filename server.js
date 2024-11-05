// install nodemon for direct file running 
// function add(a,b){
// return a+b
// }

// 2nd method 
// var add=function(a,b){
// return a+b;
// }

// 3rd mthod
//var add=(a,b)=>{return a+b};

//4th method
// var add=(a,b)=>a+b;
//  var result=add(2,14)
// console.log(result) 

// callback function using first method
// function callback(){
//     console.log("callback function is called");
// }

// const add=function(a,b,callback){
//     var result=a+b;
//     console.log('result is '+result); // add completed
//     callback(); // now call callback
// }
// add(3,4,callback);
// // callback function is called

// const add=function(a,b,callback){
//     var result=a+b;
//     console.log('result is '+result); // add completed
//     callback();
// }

// add(3,4,function(){
//     console.log('add completed using 2nd method');
// })
// //or 
// add(2,4,()=>console.log('add completed using short method'));



// //----> use os and file module ---> osmodule.js

// //--> import second file
// const second=require('./second');
// var age=second.age
// // add function called 
// var result=second.add(111000,838234)
// console.log(age,result)

// // use lodash library for using in-build method that use in array 
// var _ =require('lodash');
// var arr=["person","person",1,2,3,2,3,2,3,"name","age"]
// var filter=_.uniq(arr); // print all unique element
// console.log(_.isString('prine'))
// console.log(filter)


//json object
const jsonString='{"name":"john","age":25,"city":"shivpuri"}'
const jsonObject=JSON.parse(jsonString) // convert jsonstring to object
console.log(jsonObject.name) // print name
console.log(jsonObject.age) // print age

// object to json
const objecttojson={
    name:"Alice",
    age:25

}
const json=JSON.stringify(objecttojson)
console.log(json) // print json string 

// create api using expressjs so we use expressjs for create server  
// address of server --> localhost 
// port number ----> one port number for running server  
// user server1.js to create server
// methods to share data 
// 1. get  (get the information only nothing else).---> request data from server
// 2. post ()
// 3. patch
//4. delete