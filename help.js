var fs = require("fs")
var x = process.argv.slice(2);
if(x[0] === "help"){
	console.log("Commands\t\t\t\t    For");
	console.log("\nls\t\t\t\t\t to list files present in that present directory\nls <directory>\t\t\t\t to list files given directory\ncp <file name> <directory>\t\t to copy the file to that directory\nmov <file name> <directory>\t\t to move the file to that directory")
	console.log("read <file name>\t\t\t to view the contents of the file")	
	console.log("rm <file name>\t\t\t\t to remove the file")
	console.log("edit <file name>\t\t\t to create a new file")
	console.log("cd ..\t\t\t\t\t to go one level up of current")
	console.log("cd <folder>\t\t\t\t to go to that folder")
	console.log("cd <dir>\t\t\t\t to change present directory to dir")
	console.log("pwd\t\t\t\t\t to print the current working directory")
	console.log("mkdir <folder>\t\t\t\t to make the folder in present directory")
	console.log("rmdir <dir>\t\t\t\t removes directory (must contain only files)")
	console.log("pid\t\t\t\t\t to get the list of pids of process that are running")
	console.log("pkill <pid>\t\t\t\t to kill the process with given pid")
	console.log("diskinfo\t\t\t\t to get the available disk partitions, information")
	console.log("rename <present name> <new name>\t to rename file")
	console.log("ping <destination> \t\t\t to check the connectivity with the given address")
	console.log("exit\t\t\t\t\t to exit bash");
}