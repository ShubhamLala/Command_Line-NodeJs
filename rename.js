var fs = require('fs');
var x = process.argv.slice(2);
if(x.length==3){
    fs.rename(x[1], x[2], function (err) {
    if (err) {console.log("No such file Exists")}
    else{
    console.log('File '+x[1]+' renamed to '+x[2]);}
}); }
else{
    console.log("Syntax miss match. Type help for more info..")
}