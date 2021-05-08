var spawn = require('child_process').spawn,
    list  = spawn('cmd');

var x = process.argv.slice(2);
var i=0
if(x.length==2){
list.stdout.on('data', function (data) {
  i+=1;
  if(i>2){  console.log('' + data);
}

});

list.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

list.on('exit', function (code) {
});
var p='ping '+x[1]+"\n"
list.stdin.write(p);
list.stdin.end();}
else{
  console.log("Please enter destination")
}