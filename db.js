const sql = require('mssql')


 
var webconfig = {
    server: "serverbau.database.windows.net",
    database:"db",
    user:"adminsalih",
    password:"Qwerty123."
};
 const AZURE_CONN_STRING = process.env["Server=serverbau.database.windows.net,1433;Database=db;User Id=salihadmin;Password=Qwerty123.;Encrypt=true"];

 
 
function getBlog(){
     
    var conn = new sql.Connection(webconfig);
    var req = new sql.Request(conn);
     
    conn.connect(function(error){
         
        if(error){
             
            console.log(err);
            return;
        }
         
        req.query("SELECT * FROM db",function(err, r){
            if(err)
            {
                 
            }
            else{
                console.log(r)
            }
             
        })
         
    })
     
}
 
getBlog();