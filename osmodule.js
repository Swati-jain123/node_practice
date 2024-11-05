// os detail use os in-build module
// fs file system module it will return when file will ready
const fs=require('fs');
const os=require('os');
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.platform())
console.log(os.release())
console.log(os.userInfo())
var user=os.userInfo()
fs.appendFile('greeting.txt','Hi '+ user.username +'!\n ',()=>{console.log('file created ')
})

// path detail use path in-build module
const path=require('path');
const a=path.basename('C:\\temp\\myfile.txt')
const a2=path.dirname('C:\\temp\\myfile.txt')

console.log(a,a2)



// fs file system module it will return when file will ready

// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
// })


// this code will read file first than complete another task 
const file=fs.readFileSync('file.txt')
console.log(file.toString())

console.log("finised filr reading ")

//write file can also use writesync 
fs.writeFile('file2.txt',"This is a txt",()=>{
    console.log("file written")
});
