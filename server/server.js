//requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
const items = require( './modules/routes/items.router' );
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// routes
app.use( '/items', items );
// globals
const port = 5000;
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end spin up server