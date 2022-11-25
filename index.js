var http = require('http');
const sql = require('mssql')

http.createServer(onRequest).listen(8888);
console.log('Server has started');


async function onRequest(request, response){
response.writeHead(200);

 await sql.connect('Server=serverbau.database.windows.net,1433;Database=db;User Id=salihadmin;Password=Qwerty123.;Encrypt=true')
const result = await sql.query`select * from ikea`
console.dir(result);
    
console.log(result);

let newResults = [];
for(let i = 0; i < result.rowsAffected; i++ ){
newResults.push( result.recordset[i] );
}

console.log(newResults);
response.write(JSON.stringify(newResults));

console.log("done");

response.end();

}
