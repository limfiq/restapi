var mysql = require( 'mysql' );

const conn = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api'
} );

conn.connect( ( err ) =>
{
    if ( err ) throw err;
    console.log( 'Database Tersambung' );
} );
module.exports = conn;