var http = require('http');
const sql = require('mssql')

http.createServer(onRequest).listen(8888);
console.log('Server has started');



function onRequest(request, response){
  response.writeHead(200);
  response.write('Hello Noders');


 await sql.connect('Server=serverbau.database.windows.net,1433;Database=db;User Id=salihadmin;Password=Qwerty123.;Encrypt=true')
        const result = await sql.query`select * from db`
        console.dir(result);
        console.log('await has started');

        console.log(result);

          response.write(result);

    } catch (err) {
        // ... error checks
    }



  response.end();