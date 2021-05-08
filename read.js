var fs=require("fs");
var x = process.argv.slice(2);
if(x[0]==="read"){
    if(x.length == 3){
        try{
            var fileContent=fs.readFileSync(x[2]+"\\"+x[1]);
            console.log("\n"+fileContent)
            
        }
        catch(err){
            console.log("No such file exist")
        }
    }
    else{
        console.log("Syntax miss match. Type help for more info..")
    }
}