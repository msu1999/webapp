var http = require('http')

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response){
 console.log(' req ');
  var Connection = require('tedious').Connection;
  var Request = require('tedious').Request
  var TYPES = require('tedious').TYPES;
  
  module.exports = function (context, myTimer) {
      var _currentData = {};
  
      var config = {
          userName: 'salihadmin',
          password: 'Qwerty123.',
          server: 'serverbau.database.windows.net',
          options: {encrypt: true, database: 'db'}
      };
  
      var connection = new Connection(config);
      connection.on('connect', function(err) {
 console.log(' sql cnx');
          context.log("Connected");
          getData();
      });
  
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
  };

  response.end();
}

