var fs = require("fs")
var x = process.argv.slice(2);
var spawnObj = require('child_process').spawn;
if(x.length == 3){
    var file=x[2]+"\\"+x[1]
    if(x[0]==="edit"){
        
fs.writeFile(file,"", (err) => {                   
            if(err){console.log("Failed to create file");return;}
            else{
                spawnObj("C:\\windows\\notepad.exe", [file]);
            }
           
           });
           console.log("File is closed")
        }}
else{
    console.log("Syntax miss match. Type help for more info..")
}