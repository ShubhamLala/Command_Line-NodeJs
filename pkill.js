var ps = require('ps-node');
 
var x = process.argv.slice(2);
if(x.length==2){
ps.kill( x[1], function( err ) {
    if (err) {
        console.log("No process with pid: "+x[1])
    }
    else {
        console.log( 'Process with id %s has been killed!', x[1] );
    }
});}
else{
    console.log("Mention the pid that has to be killed")
}