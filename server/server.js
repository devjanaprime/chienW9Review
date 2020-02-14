//requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// globals
const port = 5000;
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end spin up server