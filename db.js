const mongoose=require("mongoose")

// define the MongoDb connection URL
const mongoURL='mongodb://localhost:27017/hotels' // hotesls name of database

//setup connection
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;


//define event lister
db.on('connected',()=>{
    console.log('connected to MongoDB')

});


db.on('error',(err)=>{
    console.log('error while connecting to MongoDB',err)
});
db.on('disconnected',()=>{
    console.log('disconnected from MongoDB')
});
//export db connection
module.exports=db;
