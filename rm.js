var fs=require("fs");
var x = process.argv.slice(2);
if(x[0]==="rm"){
    if(x.length == 3){
        var path = x[2]+"\\"+x[1];

        fs.unlink(path,(err)=>{
            if(err){
                console.log("No such file exist")
                return;
            }
            console.log(x[1]+" file is removed")
        }
        )
    }
    else{
        console.log("Syntax miss match. Type help for more info..")

    }
}