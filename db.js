    var Connection = require('tedious').Connection;  
    var config = {  
        server: 'serverbau.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'salihadmin', //update me
                password: 'Qwerty123.'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'db'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });
    
    connection.connect();