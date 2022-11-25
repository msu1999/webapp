var http = require('http');
http.createServer(onRequest).listen(8888);
console.log('Server has started');
    

    const sql = require('mssql')

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=serverbau.database.windows.netd,1433;Database=db;User Id=salihadmin;Password=Qwerty123.;Encrypt=true')
        const result = await sql.query`select * from db`
        console.dir(result);
          response.write(result);

    } catch (err) {
        // ... error checks
    }
}


      
 

function onRequest(request, response){
  response.writeHead(200);
  response.write('Hello Noders');
  response.end();
}