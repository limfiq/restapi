'use strict';
module.exports=function(app){
    var jsonku=require('./controller');
    app.route( '/' ).get( jsonku.index );
    
    app.route( '/tampil' ).get( jsonku.tampilkansemua );
    app.route( '/tampil/:id' ).get( jsonku.tampilsesuaiid);
    app.route( '/tambah' ).get( jsonku.tambahmahasiswa);
}