var fs = require("fs")
var x = process.argv.slice(2);
if(x.length== 4){
    var file=x[3]+"\\"+x[1];
    var newPath;
    if(x[2][1]===':'){newPath = x[2]}
    else{newPath=x[3]+"\\"+x[2]}
    if(x[0]==="mov"){
       
        var fileContent
        try{
            fileContent=fs.readFileSync(file);
            
        }
        catch(err){
            console.log("No such file exist")
        }
        fs.writeFile(newPath+"\\"+x[1],fileContent, (error) => {                   
            if(error==null){
                fs.unlink(file,(err)=>{
                    if(err){
                        console.log("No such file exist")
                        return;
                    }
                    console.log(x[1]+" file is moved")
                }
                )
            }
           
           });
    }
    else if(x[0]==="cp"){
        var fileContent
        try{
            fileContent=fs.readFileSync(file);
            
        }
        catch(err){
            console.log("No such file exist")
        }
        fs.writeFile(newPath+"\\"+x[1],fileContent, (err) => {                   
            if(err){console.log("Invalid path or failed to access path because of permission denied.");return;}
            else{
                console.log("copy operation of file "+x[1]+" successful")
            }
           
           });
}


}
else{
    console.log("Syntax miss match. Type help for more info..")
}