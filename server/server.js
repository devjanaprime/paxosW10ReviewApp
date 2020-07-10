const express = require( 'express' );
const app = express();
const inventory = require( './modules/inventory.route' );
const port = 5000;

app.use( '/inventory', inventory );

app.listen( port, ()=>{
    console.log( 'server up:', port );
})