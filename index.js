var http = require('http')

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response){
  


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
          context.log("Connected");
          getPerformance();
      });
  
      function getData() {
  
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
              
  response.writeHead(200);
  response.write('Hello Noders');
          });
          connection.execSql(request);
      }
  
      context.done();
  };

  response.end();
}

