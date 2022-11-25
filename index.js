var http = require('http');

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
    });
    
    connection.connect();

      var _currentData = {};

//////
http.createServer(onRequest).listen(8888);

console.log('Server has started');

function onRequest(request, response){
 console.log(' req ');
  
      connection.on('connect', function(err) {
 console.log(' sql cnx');
          context.log("Connected");
          getData();
      });
  

  response.end();
}




      function getData() {
   console.log(' sql getData');
          request = new Request("SELECT * FROM db;", function(err) {
          if (err) {
              context.log(err);}
          });
  
          request.on('row', function(columns) {
              _currentData.Best = columns[0].value;
              _currentData.Average = columns[1].value;;
              context.log(_currentData);
          });
  
          request.on('requestCompleted', function () {
              
   console.log('requestCompleted');

          });
          connection.execSql(request);
  response.writeHead(200);
  response.write('Hello Noders');
      }
  
      context.done();
  }