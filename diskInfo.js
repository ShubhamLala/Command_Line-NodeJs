var spawn = require('child_process').spawn,
    list  = spawn('powershell');
var i=0;
list.stdout.on('data', function (data) {
    i++;
    if(i>5){ console.log(''+data);}
});

list.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

list.on('exit', function (code) {
});

list.stdin.write('get-psdrive -psprovider filesystem\n');
list.stdin.end();