var http = require('http');
http.createServer(onRequest).listen(8888);
console.log('Server has started');
    
var Connection = require('tedious').Connection;  

    var config = {  
        server: 'serverbau.database.windows.net',
        authentication: {
            type: 'default',
            options: {
              userName: 'salihadmin',
    password: 'Qwerty123.',
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'db'
        }
    };  
   
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.  
        console.log("Connected");  
        executeStatement();  
    });  
    
    connection.connect();
  
    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    function executeStatement() {  
        request = new Request("SELECT * FROM db;", function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        
        // Close the connection after the final event emitted by the request, after the callback passes
        request.on("requestCompleted", function (rowCount, more) {
            connection.close();
                response.writeHead(200);
         response.write('Hello Noders ');
        });



        connection.execSql(request);  

    }  
      
 


function onRequest(request, response){
  response.writeHead(200);
  response.write('Hello Noders');
  response.end();
}