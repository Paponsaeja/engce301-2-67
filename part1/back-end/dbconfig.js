var dbconfig = {
    development: {
        //connectionLimit : 10,
        host     : 'localhost',
        port     : '3306',
        user     : 'root',
        password : 'SD@001Micr',
        database : 'moviedb'
    },
    production: {
        //connectionLimit : 10,
        host: 'localhost',
        port: '3306',
        user: 'dbuser',
        password: 'P@ssw0rd@2025',
        database: 'moviedb'
    }
    };
module.exports = dbconfig;
