var stdin = process.openStdin();
var input;
var currentPath=__dirname+"\\";
var fs=require("fs");

const { exec } = require("child_process");
console.log("/*    ________                            __");
console.log("/*   /__  ___/ __  ______ __ __  __ ___  / /");
console.log("/*     // _  // _//     // //  \\/ // _ \\/ /");
console.log("/*    // ___// / / / / // // /\\  // // / /__");
console.log("/*   //____//_/ /_/ /_//_//_/ /_/ \\__\\_\\___/\n");
console.log("Bash is ready. Type help to list the available function\n")
stdin.addListener("data", function(d) {
        
    input=d.toString().trim()
    var str=input.split(" ");
    
    if(input==='exit'){
        console.log("Exiting Bash !!!");process.exit();
    }
    else if(input==="help"){
        exec("node help.js help", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`${stdout}`);
    });
}
// to copy and move files
    else if(str[0]==="cp" || str[0]==='mov'){
        exec("node cpAndMov.js "+input+" "+currentPath, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });
    }
// to list files and folders
    else if(str[0] === 'ls'){
        exec("node ls.js "+input+" "+currentPath, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });
        }
// to open editor
    else if(str[0] === 'edit'){
        exec("node edit.js "+input+' '+currentPath, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });
    }
// to read file
    else if(str[0]==='read'){
        exec("node read.js "+input+" "+currentPath, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });
    }
//to remove file
    else if(str[0]==='rm'){
        exec("node rm.js "+input+" "+currentPath, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });
    }
// to change directory
    else if(str[0]==='cd'){
        var newPath="";
        if(str.length>1){
        if(str[1]=== '..'){
            var temp=currentPath.split("\\")
            if(temp.length>1){
                for(var i=0;i<temp.length-3;i++){
                    newPath+=temp[i];
                    newPath+="\\";
                }
                newPath+=temp[i];
                newPath+="\\"
                currentPath=newPath;
            }
            if(temp.length<3){
                currentPath+="\\"
            }

        }
        else{
            if(str[1][1]===":"){
                fs.readdir(str[1],(err,files)=>{
                    if(err){console.log("Invalid File Path")}
                    else{currentPath=str[1];
                        if(currentPath[2]!="\\"){currentPath+="\\"}
            }
                })
            }
            else{
                fs.readdir(currentPath+str[1],(err,files)=>{
                    if(err){console.log("No such folder exits")}
                    else{currentPath+=str[1];
                        currentPath+="\\";
                        
            }
                })
            }
        }
    }
    else{        
        console.log("Syntax miss match. Type help for more info..")
        }
        }
//to print working directory
        else if(str[0]==='pwd'){
        console.log("Current directory is "+currentPath)
        }
        else if(str[0]==='mkdir'){
        if(!fs.existsSync(currentPath+str[1])){
            fs.mkdirSync(currentPath+str[1])
            console.log(str[1]+" directory created")
        }
        else{
            console.log(str[1]+" directory already exists")
        }
    }
// to delete directory
    else if(str[0]==="rmdir"){
        if(str.length ==2){
            fs.rmdir(currentPath+str[1], function(err) {
                if(err){
                if (err.code==="ENOTEMPTY") {
                    fs.readdir(currentPath+str[1],(err,files)=>{
                        if(err){console.log("Invalid File Path\n")}
                        else{files.forEach((file)=>{
                            fs.unlink(currentPath+str[1]+"\\"+file,(err)=>{
                                if(err){
                                    console.log("No such file exist")
                                    return;
                                }
                            })
                            })
                    }
                    })
                    console.log("Directory is not empty. Removing all files\nType '"+input+"' again to remove directory")

                  
                }
                if(err.code==="ENOENT"){
                    console.log("No such directory")
                }}
                else {
                  console.log("Successfully removed the empty directory!")
                }
              }) 
        }
        else{console.log("Syntax miss match. Type help for more info..")}
    }
// to get list of running proccess's pids
    else if(str[0]==='pid'){
        exec("node pid.js ", (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });
    }
// to kill a process
    else if(str[0]==='pkill'){
        exec("node pkill.js "+input, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });
    }
// to ping 
    else if(str[0]==='ping'){
        exec("node ping2.js "+input, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });
    }
//to get disk information
    else if(str[0]==='diskinfo'){
        exec("node diskInfo.js "+input, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });
    }
    else if(str[0]==='rename'){
        exec("node rename.js "+input, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`${stdout}`);
        });
    }
//if none of the above
    else{
        console.log("Syntax miss match. Type help for more info..")

    }
});