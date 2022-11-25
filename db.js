const sql = require('mssql')

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=serverbau.database.windows.net,1433;Database=db;User Id=salihadmin;Password=salihadmin.;Encrypt=true')
        const result = await sql.query`select * from db`
        console.dir(result)
        console.log("dddd")
    } catch (err) {
        // ... error checks
    }
}