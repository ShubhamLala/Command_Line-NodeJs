var ps = require('ps-node');
 
ps.lookup({
    }, function(err, resultList ) {
    if (err) {
        throw new Error( err );
    }
 
    resultList.forEach(function( process ){
        if( process && process.command!=''){
            
            console.log( 'PID: %s, COMMAND: %s', process.pid, process.command );
        }
    });
});