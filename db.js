var sql = require('mssql')

 
var webconfig = {
    server: "serverbau.database.windows.net",
    database:"db",
    user:"adminsalih",
    password:"Qwerty123."
};
 const AZURE_CONN_STRING = process.env["Server=serverbau.database.windows.net,1433;Database=db;User Id=salihadmin;Password=Qwerty123.;Encrypt=true"];

 
 
function getBlog(){
     
    var conn = new sql.ConnectionPool(webconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
             
            console.log(error);
            return;
        }
         
        req.query("SELECT * FROM db",function(error, r){
            if(error)
            {
                               console.log(error)
  
            }
            else{
                console.log(r)
            }
             
        })
         
    })
     
}
 
getBlog();