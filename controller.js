'use strict';
var response=require('./res');
var connection=require('./koneksi');

exports.index=function(req,res){
    response.ok("REST API Berjalan",res);
}

exports.tampilkansemua = function ( req, res )
{
    connection.query( 'select * from mahasiswa', function ( error, rows, field )
    {
        if ( error )
        {
            console.log( error );
        } else
        {
            response.ok( rows, res )
        }
    } ); 
}
exports.tampilsesuaiid = function ( req, res )
{
    let id = req.params.id;
    connection.query( 'select * from mahasiswa where id = ?',[id], function ( error, rows, field )
    {
        if ( error )
        {
            console.log( error );
        } else
        {
            response.ok( rows, res )
        }
    } ); 
}