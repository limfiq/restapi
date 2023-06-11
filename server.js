const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();

//parse json
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

//panggil route
var routes=require('.route');
routes(app);

app.listen( 3000, () =>
{
    console.log( 'Server Berjalan di Port 3000' );
})