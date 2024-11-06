// create server using express
const express = require('express');
const app = express();
const db=require('./db')
require('dotenv').config();

// use body-parser  for deal with data format
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person=require('./models/Person');
const MenuItem=require('./models/Menu');

const PORT=process.env.PORT || 3000;   // FOR ACCESS ENV FILE 
app.get('/',function(req,res){
    res.send('Welcome to My Hotel....!, How Can i help you ?')
})

app.post('/person',async(req,res)=>{ 
    try{
    const data=req.body;
    const newperson=new Person(data);
    const SavedPerson=await newperson.save();
    console.log('data saved');
    res.status(200).json(SavedPerson);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal error'});
    }

})
app.post('/menuitem',async(req,res)=>{
    try{
        const data=req.body;
        const newMenuItem=new MenuItem(data);
        const SavedMenuItem=await newMenuItem.save();
        console.log('menu item saved');
        res.status(200).json(SavedMenuItem);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal error'});
    }
})
//get method to get the person
app.get('/person',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
    }
})


app.listen(PORT,()=>{
    console.log('Server is running on port 3000')
})



// Mongodb table 
//--->  1. in sql table in mongodb called collection 2. in sql row/record in mongo called Document 
//----> in sql column in mongo called Field
//---> show databases  for show all databases 
//-----> use db(or other)for use folder             
//-----> show collections for show all collections in database
//-----> db.collection.find() for show all document in collection
// use mydb
// db.createCollection("users")  create table user using mongodb
// db.users.insertOne({id:1,username:"Alice",age:25})
// db.users.find()  --> for show all data
//db.users.find({age:{$gt:21}})---> show data where age is greater than 21   use lt for lesser than
//db.users.UpdateOne({username:"Alice"},{$set:{age:22}})  --> set age 22 of username alice 
//db.users.deleteOne({id:2})--> for delete data 
//


// --> use mongoose for connect mongodb to nodejs 
//--> use mongod command for run localhost 

//---> models are the blueprint of our database
//---> models are the class that we use to interact with our database


// ---> hosting node application use github
//--> 1. install git 
//--> git init to initilize github in project
//---> git status shows the status means not saved file
//---> git add. to save all file
//--> git ignore for ignore git modules and other files
//--> use git rm-r--cached node_modules command for remove node_modules inside git
//--> git commit -m "first version of our node folder" command for first commit 
//--> create repositery 
// git remote add origin https://github.com/Swati-jain123/node_practice.git
//git branch -M main
//git push -u origin main
// git pull command for get all the changes which done by others 


// host mongodb database
//use mongodb atlas 
