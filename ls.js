var fs = require("fs")
var x = process.argv.slice(2);
if(x[0] === "ls"){
	var path=x[1];
	fs.readdir(path,(err,files)=>{
		if(err){console.log("Invalid File Path\n")}
		else{console.log("\nContents of path "+path);files.forEach((file)=>{
			console.log(file)
		})
}
	})
		
	
}